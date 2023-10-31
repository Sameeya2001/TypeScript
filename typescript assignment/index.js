"use strict";
class Astronaut {
    constructor(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
}
class Cargo {
    constructor(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
}
class Rocket {
    constructor(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items) {
        return items.reduce((totalMass, item) => totalMass + item.massKg, 0);
    }
    currentMassKg() {
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    }
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}

const rocket = new Rocket("Falcon 9", 2000);
const astronaut1 = new Astronaut(80, "John");
const cargo1 = new Cargo(500, "Satellite");
const astronaut2 = new Astronaut(70, "Alice");
const cargo2 = new Cargo(1800, "Satellite");
console.log("Rocket can add astronaut1:", rocket.addAstronaut(astronaut1));
console.log("Rocket can add cargo1:", rocket.addCargo(cargo1));
console.log("Rocket can add astronaut2:", rocket.addAstronaut(astronaut2));
console.log("Rocket can add cargo2:", rocket.addCargo(cargo2));
console.log("Rocket current mass:", rocket.currentMassKg());
