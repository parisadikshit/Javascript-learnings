export class Add{
    constructor(private x:number,private y:number){

    }
    sum(){
        console.log("Sum is "+(this.x+this.y));
    }
}