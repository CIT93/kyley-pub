1. async and await must be used together
    Exceptions: JS Modules & Chrome DevTools Console
2. async/await only affects Promise receiver
3. You can await any function that returns a Promise
4. Any function can be converted to async
    
    const me - {
        async sayHello() {
            const result = await callSomeApi()
            returm `I am Qoli`
        }
    }

    me.sayHello() //Promise {`I am Qoli`}

5. All async functions return a Promise
6. Error handling with try/catch