/**
 * Takes a script represented as a string, and returns a worker running that script.
 */
export function stringWorker(script: string): Worker {
    const blob = new Blob([script], { type: 'text/javascript' })
    const url = URL.createObjectURL(blob)
    const worker = new Worker(url, { type: 'module' })
    URL.revokeObjectURL(url)
    return worker
}