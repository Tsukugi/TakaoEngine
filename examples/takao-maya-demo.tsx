/**
 * Demo: Connecting Takao Engine with Maya Rendering System
 *
 * Demonstrates how to integrate Takao's game logic with Maya's rendering system
 */

import React, { useEffect, useState } from 'react';
import { Box, Text, Newline } from 'ink';
import { render } from 'ink';
import { TakaoImpl } from '@atsu/takao';
import { World, Map as GameMap, Position } from '@atsu/choukai';
import { GameRenderer } from '@atsu/maya';

interface IUnitPosition {
  unitId: string;
  mapId: string;
  position: Position;
}

const TakaoMayaDemo = () => {
  const [takao, setTakao] = useState<TakaoImpl | null>(null);
  const [world, setWorld] = useState<World | null>(null);
  const [unitNames, setUnitNames] = useState<Record<string, string>>({});
  const [unitPositions, setUnitPositions] = useState<Record<string, IUnitPosition>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeTakaoWithMaya = async () => {
      try {
        // Create and initialize Takao instance
        const takaoInstance = new TakaoImpl();
        await takaoInstance.initialize();
        
        setTakao(takaoInstance);
        
        // Get the world instance
        const worldInstance = takaoInstance.getWorld();
        setWorld(worldInstance);
        
        // Get all units and their names
        const allUnits = takaoInstance.getUnitController().getUnits();
        const names: Record<string, string> = {};
        for (const unit of allUnits) {
          names[unit.id] = unit.name;
        }
        setUnitNames(names);
        
        // Get all unit positions from the WorldManager
        const positions: Record<string, IUnitPosition> = {};
        for (const unit of allUnits) {
          try {
            const pos = unit.getPropertyValue('position');
            if (pos && pos.mapId && pos.position) {
              positions[unit.id] = {
                unitId: unit.id,
                mapId: pos.mapId,
                position: pos.position instanceof Position ? pos.position : new Position(pos.position.x, pos.position.y, pos.position.z),
              };
            }
          } catch (error) {
            console.error(`Could not get position for ${unit.id}:`, error);
          }
        }
        setUnitPositions(positions);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing Takao with Maya:', error);
        setIsLoading(false);
      }
    };

    initializeTakaoWithMaya();
  }, []);

  if (isLoading) {
    return <Text>Loading Takao Engine with Maya rendering...</Text>;
  }

  if (!world) {
    return <Text>Failed to load the game world.</Text>;
  }

  return (
    <Box flexDirection="column">
      <Box flexDirection="row" justifyContent="center" marginBottom={1}>
        <Text bold color="magenta">Takao Engine with Maya Rendering</Text>
      </Box>
      <GameRenderer
        world={world}
        unitNames={unitNames}
        unitPositions={unitPositions}
      />
      <Newline />
      <Box flexDirection="row" justifyContent="center">
        <Text color="gray">Press Ctrl+C to exit</Text>
      </Box>
    </Box>
  );
};

// Render the demo application
render(<TakaoMayaDemo />);