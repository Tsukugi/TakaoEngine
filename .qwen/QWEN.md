# Project Context

This file contains project-specific context and information for AI assistants working with the TakaoEngine codebase.

## Project Overview
- Project Name: TakaoEngine
- Date: Friday, November 28, 2025
- Operating System: Linux
- Project Directory: /mnt/g/dev/TakaoEngine

## Complete Project Structure

### Root Directory
```
/mnt/g/dev/TakaoEngine/
├───.gitignore
├───.gitmodules
├───LICENSE
├───package-lock.json
├───package.json
├───QWEN.md
├───README.md
├───.git/...
├───.qwen/
│   └───PROJECT_SUMMARY.md
├───Atago/
├───Choukai/
├───node_modules/...
└───Takao/
```

### Atago Subproject
```
/mnt/g/dev/TakaoEngine/Atago/
├───.eslintrc.json
├───.gitignore
├───.prettierrc
├───.qwen/
├───.vscode/
├───examples/
├───node_modules/
├───package.json
├───README.md
├───tests/
├───tsconfig.json
├───tsconfig.node.json
├───tsup.config.ts
├───vite.config.ts
└───src/
    ├───core/
    │   ├───Property.ts
    │   └───Unit.ts
    ├───types/
    │   ├───index.ts
    │   ├───propertyTypes.ts
    │   └───unitTypes.ts
    ├───utils/
    │   └───traitUtils.ts
    └───index.ts
```

### Choukai Subproject
```
/mnt/g/dev/TakaoEngine/Choukai/
├───.eslintrc.json
├───.gitignore
├───.prettierrc
├───.qwen/
├───node_modules/
├───package.json
├───README.md
├───tests/
├───tsconfig.json
├───tsconfig.node.json
├───tsup.config.ts
├───vite.config.ts
└───src/
    ├───core/
    │   ├───Map.ts
    │   ├───Position.ts
    │   └───World.ts
    ├───types/
    │   ├───mapTypes.ts
    │   └───positionTypes.ts
    ├───utils/
    └───index.ts
```

### Takao Subproject
```
/mnt/g/dev/TakaoEngine/Takao/
├───.eslintrc.json
├───.gitignore
├───.prettierrc
├───.qwen/
├───data/
├───examples/
├───eslint.config.js
├───node_modules/
├───package-lock.json
├───package.json
├───README.md
├───tests/
├───tsconfig.json
├───tsconfig.node.json
├───tsup.config.ts
├───vitest.config.ts
└───src/
    ├───ai/
    │   ├───UnitController.ts
    │   └───WorldController.ts
    ├───core/
    │   ├───GameEngine.ts
    │   ├───GameLoop.ts
    │   ├───StoryTeller.ts
    │   └───TurnManager.ts
    ├───types/
    │   ├───index.ts
    │   └───typeGuards.ts
    ├───utils/
    │   ├───ActionProcessor.ts
    │   ├───ConditionParser.ts
    │   ├───ConfigManager.ts
    │   ├───DataManager.ts
    │   ├───GateSystem.ts
    │   ├───MapGenerator.ts
    │   ├───MapRenderer.ts
    │   ├───Math.ts
    │   ├───StatTracker.ts
    │   └───WorldManager.ts
    ├───index.ts
    └───TakaoImpl.ts
```

## Notes
- This is a multi-module project with Atago, Choukai, and Takao components
- All three projects are TypeScript/JavaScript projects with ESLint, Prettier, and TypeScript configuration
- Atago appears to handle properties and units
- Choukai appears to handle maps, positions, and world management
- Takao appears to be the main game engine with AI controllers, game loop, and various utilities

## Important Rules
- Do not commit automatically, always ask before trying to commit to git.
- Don't be lazy, if you find something difficult, search info online about how to resolve it.
- Avoid using type 'any' or 'unknown' or 'never' as much as possible, search through the types to find a corresponding type.
- Run test, tsc, build and lint after every finished task to check if everything is working before continuing.