# Agents Guide

Shared notes for AI/automation working on the TakaoEngine monorepo.

## Workspaces
- Root scripts: `npm test|lint|build --workspaces`
- Projects: Atago (units), Choukai (maps), Takao (engine), Maya (renderer)

## Common commands
- Tests: `npm test` (root) or `npm test --workspace=<name>`
- Build: `npm run build --workspace=<name>`
- Type check: `npx tsc --noEmit --project <workspace>/tsconfig.json`
- Lint: `npm run lint --workspace=<name>`

## Notes
- Keep dependencies scoped to the right workspace; use devDependencies for tooling.
- Prefer `vitest` for tests; coverage uses `@vitest/coverage-v8`.
- Avoid removing user changes; never reset the repo without explicit instruction.
- Always test before finishing a plan
- Always read agents/PROJECT.md to understand the module/project

## Git
- Avoid commiting or pushing without user permission
- Commit message must have a title and a description with min 50 words, use bullet list of changes format
- Avoid using file paths in commit messages
