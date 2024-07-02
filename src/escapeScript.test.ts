import { escapeScript } from './escapeScript.ts'
import { assertStrictEquals } from "@std/assert"

Deno.test('escapeScript: should escape string interpolation', () => {
    const expected = 'const x = { value: $\\{x} }'
    const actual = escapeScript('const x = { value: ${x} }')
    assertStrictEquals(actual, expected)
})

Deno.test('escapeScript: should escape backticks', () => {
    const expected = 'const x = \\`hello\\`'
    const actual = escapeScript('const x = `hello`')
    assertStrictEquals(actual, expected)
})

Deno.test('escapeScript: should escape backslashes', () => {
    const expected = 'hello\\\\nworld'
    const actual = escapeScript('hello\\nworld')
    assertStrictEquals(actual, expected)
})