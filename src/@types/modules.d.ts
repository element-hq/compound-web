// This file is used to include type declarations from non-@types packages.
// This is better than setting them in the .compilerOptions.types field of
// tsconfig.json, because then you would override the default behavior of
// automatically including declarations from @types packages, and have to set
// each one up manually.

/// <reference types="vite/client" />
