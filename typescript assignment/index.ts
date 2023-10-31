interface Payload {
    massKg: number;
  }
  
  class Astronaut implements Payload {
    constructor(public massKg: number, public name: string) {}
  }
  
  class Cargo implements Payload {
    constructor(public massKg: number, public material: string) {}
  }
  
  class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
  
    constructor(name: string, totalCapacityKg: number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;
    }
  
    sumMass(items: Payload[]): number {
      return items.reduce((totalMass, item) => totalMass + item.massKg, 0);
    }
  
    currentMassKg(): number {
      const cargoMass = this.sumMass(this.cargoItems);
      const astronautMass = this.sumMass(this.astronauts);
      return cargoMass + astronautMass;
    }
  
    canAdd(item: Payload): boolean {
      return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
  
    addCargo(cargo: Cargo): boolean {
      if (this.canAdd(cargo)) {
        this.cargoItems.push(cargo);
        return true;
      }
      return false;
    }
  
    addAstronaut(astronaut: Astronaut): boolean {
      if (this.canAdd(astronaut)) {
        this.astronauts.push(astronaut);
        return true;
      }
      return false;
    }
  }
  
  // Example simulation
  const rocket = new Rocket("Falcon 9", 20000);
  const astronaut1 = new Astronaut(80, "John");
  const cargo1 = new Cargo(500, "Satellite");
  const astronaut2 = new Astronaut(70, "Alice");
  const cargo2 = new Cargo(700, "Satellite");
  console.log("Rocket can add astronaut1:", rocket.addAstronaut(astronaut1));
  console.log("Rocket can add cargo1:", rocket.addCargo(cargo1));
  console.log("Rocket can add astronaut2:", rocket.addAstronaut(astronaut2));
  console.log("Rocket can add cargo2:", rocket.addCargo(cargo2));

  console.log("Rocket current mass:", rocket.currentMassKg());
  