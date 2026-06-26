'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Carnivore || herbivore.hidden === true) {
      return false;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      const animalInArr = Animal.alive.findIndex((item) => item === herbivore);

      Animal.alive.splice(animalInArr, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
