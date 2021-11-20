![rm](https://user-images.githubusercontent.com/8418700/142704968-e37b9490-7653-4ac0-8dfe-995663ad1a79.jpg)

This template is useful to create your next node package.

It supports:

- [x] Rollup bundler (`amd`, `commonjs`, `esm`, `iife`, `umd`) with `sourcemap`
- [x] TypeScript with `declaration`
- [x] ESLint
- [x] Prettier
- [x] Testing (`Mocha`, `Chai`, `Sinon`)
- [x] Testing Coverage (`Istanbuljs/nyc`)
- [x] Documentation (`TypeDoc`)
- [x] Git (`Husky`, `lint-staged`)
- [x] Minification (`Terser`)

### Usage

1. Update the `name` inside `package.json`. (`your-project-name` => `?`)
2. Update two `iife` and `umd` module `name` inside `rollup.config.js`. (`--module--name--` => `?`)
3. Update `homepage`, `bugs` and `repository` URLs inside `package.json`.
