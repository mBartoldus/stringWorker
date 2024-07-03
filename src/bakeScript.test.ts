import { bakeScript } from './bakeScript.ts'
import { assertStrictEquals } from "@std/assert"

Deno.test('bakeScript: should create a default export statement', () => {
    const expected = 'export default `hello`'
    const actual = bakeScript('hello')
    assertStrictEquals(actual, expected)
})

Deno.test('bakeScript: should format template literal appropriately', () => {
    const script = '`hello ${ "\\nworld" }`'
    const expected = 'export default `\\`hello $\\{ "\\\\nworld" }\\``'
    const actual = bakeScript(script)
    assertStrictEquals(actual, expected)
})