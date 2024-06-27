Simply a function which returns a worker, running a script provided as a string.

> Use with the same caution one would apply to `eval`.

```javascript
const worker = stringWorker(`console.log('hello from the worker thread')`)
worker.terminate()
```