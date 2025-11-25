# TakaoEngine

A comprehensive game engine monorepo containing interconnected modules for game development:

- **Atago**: Game unit management system with properties, actions, and state machines
- **Choukai**: Map and positioning system with terrain-based mechanics
- **Takao**: Main engine module that integrates the other components

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

### Choukai - Map and Positioning System
Choukai is a map and positioning system that allows units to be placed and managed within coordinate-based maps with different terrain types. It works alongside the Atago game unit system to provide spatial awareness.

- Coordinate-based maps with customizable terrain types
- Unit positioning and movement with terrain awareness
- Terrain influence on unit properties (movement cost, defense bonuses)
- Support for different map sizes and topologies
- 3D position support with optional Z coordinate
- World management for multiple maps

### Takao - Main Engine Module
The main engine module that orchestrates the other components and provides the overall game engine functionality.

## Getting Started

### Prerequisites
- Node.js 18+ 
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

# Run tests for individual packages
cd Atago && npm test
cd Choukai && npm test
cd Takao && npm test
```

## License

MIT License - see the [LICENSE](LICENSE) file for details.