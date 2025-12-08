# TakaoEngine

A comprehensive game engine monorepo containing interconnected modules for game development:

- **Atago**: Game unit management system with properties, actions, and state machines
- **Choukai**: Map and positioning system with terrain-based mechanics
- **Takao**: Main engine module that integrates the other components
- **Maya**: Modern rendering system built with React and Ink for terminal UI

## Architecture

### Atago - Game Unit System
Atago is a game unit system that manages units, actions, and state transitions. It provides the core functionality for representing game units and their behaviors through a flexible action and state system.

- Unit Management with unique IDs, types, and states
- Action System with preconditions and effects
- State Machine for managing state transitions
- Action Scheduler for queuing and executing actions
- Event System for reactive programming
- Action History with undo functionality
- Character trait system for personality characteristics
- Dynamic property system with modifier support
- Base value vs current value distinction for temporary vs permanent changes

### Choukai - Map and Positioning System
Choukai is a map and positioning system that allows units to be placed and managed within coordinate-based maps with different terrain types. It works alongside the Atago game unit system to provide spatial awareness.

- Coordinate-based maps with customizable terrain types
- Unit positioning and movement with terrain awareness
- Support for different map sizes and topologies
- World management for multiple maps

### Takao - Main Engine Module
The main engine module that orchestrates the other components and provides the overall game engine functionality.

- Advanced turn-based system with history tracking
- Comprehensive action processing with requirement validation
- Flexible stat tracking and narrative generation
- Condition-based action filtering and story telling
- Data management and persistence capabilities
- Integration with Atago units and Choukai maps

### Maya - Rendering System
A modern rendering system built with React and Ink that provides terminal-based visualization for the game engine.

- Component-based rendering with React and Ink
- Efficient updates with only changed elements rerendered
- Fixed display area preventing scrolling issues
- Full color terminal support for different terrain types and units
- Responsive layout adapting to terminal dimensions
- Integrated game rendering with unit positions and map visualization

## Features

### Game Mechanics
- **Turn-Based System**: Advanced turn management with history tracking
- **Dynamic Spawning**: Automatic population of wild animals every 10 turns
- **Relationship System**: Faction-based hostility and alliance mechanics
- **Action Processing**: Complex action requirements and effects

### Rendering
- **Terminal UI**: Modern React-based terminal interface with Ink
- **Map Visualization**: Colorful representation of game maps and terrain
- **Unit Positioning**: Real-time display of unit locations and movements
- **Responsive Design**: Adapts to various terminal sizes

## Getting Started

### Prerequisites
- Node.js 18+ (required for ES modules and TypeScript support)
- npm package manager

### Installation

```bash
# Install dependencies for all workspaces
npm install

# Build all packages
npm run build
```

### Development

```bash
# Run development mode for all packages
npm run dev

# Run tests for all packages
npm test

# Run linting for all packages
npm run lint
```

### Individual Package Commands

```bash
# Build individual packages
cd Atago && npm run build
cd Choukai && npm run build
cd Takao && npm run build
cd Maya && npm run build

# Run tests for individual packages
cd Atago && npm test
cd Choukai && npm test
cd Takao && npm test
cd Maya && npm test
```

### Running the Game

```bash
# Start the game engine
npm start
```

## Recent Updates

### Enemy Spawning System
A new automated enemy spawning system has been implemented that:
- Spawns wild animals (wolves) every 10 turns
- Maintains a minimum of 3 units with the "Wild Animals" faction
- Creates hostile relationships with player units
- Places new units at random positions on the main map

## License

MIT License - see the [LICENSE](LICENSE) file for details.