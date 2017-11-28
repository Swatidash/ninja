class Ninja {
    constructor(name)
    {
        this.name=name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`This ninja name is  ${this.x}`);
    }
    showStats(){
        console.log(`Ninja's health:${this.health} and ninja's speed: ${this.speed} 
        and Ninja's strength is: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
    super(name);
    this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
