function add(a:number, b:number, printResult:(string,any)=>void){
    printResult("result",a+b);
}

function print(msg: string, val:number):void{
    console.log(`${msg},${val}`)
}

add(2,3,print)