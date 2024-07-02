import { exportScript } from './exportScript.ts'
import { assertStrictEquals } from "@std/assert"

Deno.test('exportScript: should create a default export statement', () => {
    const expected = 'export default `hello`'
    const actual = exportScript('hello')
    assertStrictEquals(actual, expected)
})

Deno.test('exportScript: should format template literal appropriately', () => {
    const script = '`hello ${ "\\nworld" }`'
    const expected = 'export default `\\`hello $\\{ "\\\\nworld" }\\``'
    const actual = exportScript(script)
    assertStrictEquals(actual, expected)
})