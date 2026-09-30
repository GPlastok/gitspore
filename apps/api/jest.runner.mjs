// Nest 12 is ESM-only, and jest loads ESM only under --experimental-vm-modules.
// In a workspace jest is hoisted to the repo root, so resolve it rather than
// hardcoding a relative path that breaks when hoisting changes.
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

// On Windows a dynamic import() needs a file:// URL, not a bare "D:\..." path.
await import(pathToFileURL(require.resolve("jest/bin/jest")).href);
