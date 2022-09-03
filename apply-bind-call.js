let employee1 = {
    firstname:"Shreya",
    lastname:"Dikshit",
    role:"Developer"
}

let employee2 = {
    firstname:"Kartik",
    lastname:"Rai",
    role:"Manager"
}

let printInfo =function (task, completed){
    console.log(this.firstname, this.lastname, this.role, task, completed)
}

printInfo.call(employee1,"Structure node.js application",true)

printInfo.apply(employee1,["Structure node.js application",true])

let printemployeeInfo = printInfo.bind(employee2,"Reading data",false)
console.log(printemployeeInfo)
printemployeeInfo()