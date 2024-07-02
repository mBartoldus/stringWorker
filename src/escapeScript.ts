const escRegex = /`|(?<=\$){|\\/g
/**
 * Adds escape character before:
 * - backticks ``` ` ```
 * - escape characters ``` \ ```
 * - the opening curly brace in an interpolation ``` ${ ```
 * This allows the script to be saved as a backtick string within another script.
 */
export const escapeScript = (str: string) =>
    str.replaceAll(escRegex, '\\$&')