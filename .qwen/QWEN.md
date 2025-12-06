# Project Context

This file contains project-specific context and information for AI assistants working with the TakaoEngine codebase.

## Project Overview
- Project Name: TakaoEngine
- Date: Saturday, December 6, 2025
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
├───README.md
├───.git/...
├───.qwen/
│   └───PROJECT_SUMMARY.md
├───Atago/
├───Choukai/
├───Maya/
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
    │   ├───WorldManager.ts
    │   └───WorldSnapshotSerializer.ts
    ├───index.ts
    └───TakaoImpl.ts
```

### Maya Subproject
```
/mnt/g/dev/TakaoEngine/Maya/
├───.gitignore
├───.qwen/
├───node_modules/
├───src/
│   ├───components/
│   │   ├───ActionDiary.tsx
│   │   ├───GameRenderer.tsx
│   │   └───MapRenderer.tsx
│   ├───index.tsx
│   └───types.ts
├───tests/
├───package.json
├───README.md
├───tsconfig.json
├───tsup.config.ts
└───vitest.config.ts
```


## Notes
- This is a multi-module monorepo project with Atago, Choukai, Takao, and Maya components
- All projects are TypeScript/JavaScript projects with ESLint, Prettier, and TypeScript configuration
- Workspaces are defined in the root package.json: Atago, Choukai, Takao, and Maya
- Atago handles properties and units
- Choukai handles maps, positions, and world management
- Takao is the main game engine with AI controllers, game loop, and various utilities
- Maya is a modern rendering system built with Ink and React for terminal UI, providing efficient rendering for game worlds

## Important Rules
- Do not commit automatically, always ask before trying to commit to git.
- Don't be lazy, if you find something difficult, search info online about how to resolve it.
- Avoid using type 'any' or 'unknown' or 'never' as much as possible, search through the types to find a corresponding type.
- Run test, tsc, build and lint after every finished task to check if everything is working before continuing.