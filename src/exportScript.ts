import { escapeScript } from './escapeScript.ts'

export function exportScript(script: string): string {
    return `export default \`${escapeScript(script)}\``
}