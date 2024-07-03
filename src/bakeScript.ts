import { escapeScript } from './escapeScript.ts'

/**
 * Converts a script, representated as a string, to a script which exports that script as a string.
 * @example
 * const script = bakeScript('console.log("hello world")')
 * // returns `export default \`bakeScript('console.log("hello world")')\``
 */
export function bakeScript(script: string): string {
    return `export default \`${escapeScript(script)}\``
}