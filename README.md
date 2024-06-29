Simply a function which returns a worker, running a script provided as a string.

> Use with the same caution one would apply to `eval`.
```javascript
const worker = stringWorker(`console.log('hello from the worker thread')`)
```

For relative paths to imported modules, use `import.meta.resolve`.
```javascript
const worker = stringWorker(`import '${import.meta.resolve('./example.js')}'`)
```

As with any worker, remember to terminate it when it's done running.
```javascript
worker.terminate()
```