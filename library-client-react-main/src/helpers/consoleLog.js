export function consoleLog(logged) {
    console.log(logged);
}
export function consoleLogObject(name, obj, context) {
    if(context && context.constructor){
        consoleLog(`${context.constructor.name}: ${name} ${JSON.stringify(obj,null,4)}`);
    } else {
        consoleLog(`non-context: ${name} ${JSON.stringify(obj,null,4)}`);
    }
}
export function consoleLogWithText(name, obj, context) {
    if(context && context.constructor){
        consoleLog(`${context.constructor.name}: ${name}: ${obj}`);
    } else {
        consoleLog(`non-context: ${name}: ${obj}`);
    }
}