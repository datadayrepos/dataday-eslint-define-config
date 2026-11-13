import type { ESLintConfig } from './config';
import type { FlatESLintConfig } from './flat-config';
import type { BuiltinRules, RuleConfig } from './rules';

/**
 * Define an ESLint config.
 *
 * @param config ESLint config.
 * @returns ESLint config.
 */
export function defineConfig<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Preserve the public open-key generic constraint.
  Rules extends Record<any, RuleConfig> = BuiltinRules,
  Strict extends boolean = false,
>(config: ESLintConfig<Rules, Strict>): ESLintConfig {
  return config;
}

/**
 * Define an item of Flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config an item of Flat ESLint config.
 * @returns an item of Flat ESLint config.
 */
export function defineFlatConfig<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Retain the public generic argument for source compatibility.
  Rules extends Record<string, RuleConfig> = BuiltinRules,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Retain the public generic argument for source compatibility.
  Strict extends boolean = false,
>(config: FlatESLintConfig): FlatESLintConfig;

/**
 * Define a flat ESLint config.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 *
 * @param config Flat ESLint config.
 * @returns Flat ESLint config.
 */
export function defineFlatConfig(
  config: ReadonlyArray<FlatESLintConfig>,
): FlatESLintConfig[];

export function defineFlatConfig(config: unknown): unknown {
  return config;
}

export type * from './config';
export type * from './flat-config';
export type * from './parser-options';
export type * from './rules';
export type * from './utils';
