function names(name:string){
    function greetings(greeting:string){
        return greeting +" "+ name 
    }
    return greetings
}

let n = names("Shreya")
console.log(n("Hello"))