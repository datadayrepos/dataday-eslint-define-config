<p>
  <a href="https://www.npmjs.com/package/eslint-define-config" target="_blank">
    <img alt="NPM package" src="https://img.shields.io/npm/v/eslint-define-config.svg">
  </a>
  <a href="https://www.npmjs.com/package/eslint-define-config" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/eslint-define-config.svg">
  </a>
  <a href="https://github.com/eslint-types/eslint-define-config/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/eslint-types/eslint-define-config/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
  <a href="https://github.com/eslint-types/eslint-define-config/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/eslint-types/eslint-define-config.svg">
  </a>
  <a href="https://prettier.io" target="_blank">
    <img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
  <a href="https://www.paypal.com/donate?hosted_button_id=L7GY729FBKTZY" target="_blank">
    <img alt="Donate: PayPal" src="https://img.shields.io/badge/Donate-PayPal-blue.svg">
  </a>
</p>

# eslint-define-config

Disconnected fork of original at: https://github.com/eslint-types/eslint-define-config
changes:

- reexport rules for the plugins
- allows overrides of rules
- supprots renaming rules

Provide a `defineConfig` function for `.eslintrc.js`, and a `defineFlatConfig` function for `eslint.config.js` files.

> This project is written by a human and only partially automatically generated!  
> Some rules are even enhanced by hand!  
> Unfortunately, this has the disadvantage that not everything is immediately defined. For example, if a rule is not defined, it falls back to a basic definition.  
> However, the advantage is that you get documentation for pretty much everything in the code and usually get a direct link to the respective plugin or eslint rule. The types are also strictly typed.
>
> So if you are missing something like a rule or a plugin that should also be supported or a rule definition is e.g. out of date, feel free to open an issue or PR for it.

# Installation

```bash
# add eslint and eslint-define-config to project’s dev dependencies
npm add --save-dev eslint eslint-define-config
# or
yarn add --dev eslint eslint-define-config
# or
pnpm add --save-dev eslint eslint-define-config
```

# Usage

`.eslintrc.js`

```ts
// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  rules: {
    // rules...
  },
});
```

## Flat Config

`eslint.config.js`

```ts
// @ts-check
const { defineFlatConfig } = require('eslint-define-config');

module.exports = defineFlatConfig([
  'eslint:recommended',
  {
    plugins: {
      // plugins...
    },
    rules: {
      // rules...
    },
  },
]);
```

# Why?

Improve your eslint configuration experience with:

- auto-suggestions
- type checking (Use `// @ts-check` at the first line in your `.eslintrc.js` or `eslint.config.js`)
- documentation
- deprecation warnings

<img src="https://user-images.githubusercontent.com/7195563/112484789-8a416480-8d7a-11eb-9337-d8b5bc16de17.png" alt="Image" width="600px"/>

## Video

_Click on the thumbnail to play the video_

<a href="https://user-images.githubusercontent.com/7195563/112726158-4a19e780-8f1c-11eb-8cc6-4ea6c100137f.mp4" target="_blank">
  <img src="https://user-images.githubusercontent.com/7195563/112726343-30c56b00-8f1d-11eb-9b92-260c530caf1b.png" alt="Video" width="600px"/>
</a>

# Development

Development, rule generation and CI require Node.js 22 and the pnpm version pinned
in `package.json`. The published package still targets Node.js 18; its public type
declarations are maintained separately from generator dependency updates.
`tsconfig.dev.json` resolves modern tooling exports without changing the published
`tsconfig.json` or disabling declaration checks. tsup stays on 8.5.0 because
8.5.1 imports a declaration file missing from its archive; its optional SWC peer
is installed for type checking.

Run `corepack pnpm install --frozen-lockfile` before the existing build, lint,
TypeScript, unit-test and type-test checks. The full dependency audit remains a
blocking check in `shell/deploy.sh`; do not regenerate published rule declarations
as a side effect of updating development tooling.

The scoped pnpm overrides provide security fixes for the development dependency
graph. The Vue/Pug tokenizer override keeps the Vue profiles on a tested parser 10
and tokenizer 1 combination. Do not replace these boundaries with ignored audit
findings or ignored peer-dependency errors.

# Credits

- [Proposal Idea](https://github.com/eslint/eslint/issues/14249)
- [Vite](https://github.com/vitejs/vite) and [Evan You](https://github.com/yyx990803) for the idea
- [@antfu](https://github.com/antfu) and his [tweet](https://twitter.com/antfu7/status/1365907188338753536)
