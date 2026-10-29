// @lumina/config — shared configuration for the Lumina template.
//
// The Tailwind preset and the base tsconfig are consumed by subpath:
//   tailwind:  @lumina/config/tailwind/preset
//   tsconfig:  @lumina/config/tsconfig/base
//
// This entry point exists so the package's `main` field points at a real
// file. Packages are consumed from source (see README), so the build step
// for @lumina/core and @lumina/ui is a typecheck, not an emit step.
module.exports = {
  tailwindPreset: require('./tailwind/preset'),
};
