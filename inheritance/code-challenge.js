class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    eat() {
        console.log(`The ${this.color} ${this.element} ${this.type} eat only meat.`)
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

class WildAnimals extends Dragon {
    constructor(type, color, element, movementMode) {
        super(type, color, element);
        this.movementMode = movementMode;
    }
    movement() {
        console.log(`The ${this.color} ${this.type} can ${this.movementMode}`)
    }

}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar();
woodDragon.fly();
woodDragon.eat();

const objWereWolf = new Werewolf("Horskiy", 'black');
objWereWolf.howl();

const objWildAnimals = new WildAnimals("Lion", "brown", "Africa", "run");
objWildAnimals.roar();
objWildAnimals.movement();
objWildAnimals.eat();


