

export class Cat{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}
var myCat:Cat =new Cat('ray', 43);
console.log(myCat);