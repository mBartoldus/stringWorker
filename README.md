# stringWorker

The main export of this library is simply a function which returns a worker, running a script provided as a string.

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

# bakeScript

In some cases you may wish to dynamically generate a script for use in a worker. For ease of bundling, it may be beneficial to store that generated script as a string, which can then be ran through `stringWorker`. The function `bakeScript` assists in that task.

For example, imagine a script which performs `console.log("hello world")`. It would need to export a string like this:
```javascript
export default `console.log("hello world")`
```

The function `bakeScript` would generate the text for such a file, including any necessary escape characters.
```javascript
const script = bakeScript('console.log("hello world")')
// the script can then be saved to a file
await Deno.writeFile("script.js", new TextEncoder().encode(script))
```

That script's default export can then be imported and ran using `stringWorker`, and the resulting code can be bundled into one module.
```javascript
import script from './script.js'
stringWorker(script)
```