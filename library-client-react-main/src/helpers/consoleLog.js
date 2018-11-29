export function consoleLog(text) {
    console.log(text);
}

export function consoleLogWithContext(name, text, context) {
    contextConditions(
        () => {consoleLog(`${context.name}: ${name}: ${text}`);},
        () => {consoleLog(`${context.constructor.name}: ${name}: ${text}`);},
        () => {consoleLog(`non-context: ${name}: ${text}`);},
        context
    )
}

export function consoleLogObject(name, obj, context) {
    contextConditions(
        () => {consoleLog(`${context.name}: ${name} ${JSON.stringify(obj,null,4)}`);},
        () => {consoleLog(`${context.constructor.name}: ${name} ${JSON.stringify(obj,null,4)}`);},
        () => {consoleLog(`non-context: ${name} ${JSON.stringify(obj,null,4)}`);},
        context
    )
}

function contextConditions(fn1, fn2, fn3, context) {
    if(context && typeof context === 'function') {
        fn1();
    } else if(context && context.constructor){
        fn2();
    } else {
        fn3();
    }
}