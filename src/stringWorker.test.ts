import { stringWorker } from "./stringWorker.ts"
import { assertEquals } from "@std/assert"

Deno.test('makeWorker: should generate a worker from the given script', async () => {
    const worker = stringWorker(`addEventListener('message', e=>postMessage(e.data+' world'))`)
    const promise = new Promise(resolve => { worker.onmessage = e => resolve(e.data) })
    worker.postMessage('hello')
    assertEquals(await promise, 'hello world')
    worker.terminate()
})