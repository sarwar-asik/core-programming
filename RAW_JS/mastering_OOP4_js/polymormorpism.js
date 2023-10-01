console.log("polymormorpism.js");

class CommonPlayer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }

  getPlayerDetails() {
    return `name=${this.name} , age=${this.age}`;
  }
}

// cricketer Class

class CricketsMan extends CommonPlayer {
  #centuries;

  constructor(name, age, centuries) {
    super(name, age);

    this.#centuries = centuries;
  }
  getPlayerDetails() {
    return `${this.getName()}  age is ${this.age} `;
  }
}

const player1 = new CricketsMan("Tamim", 30, 10);

console.log(player1.getPlayerDetails());

// footballer  Class

class FootballerMan extends CommonPlayer {
  #goals;

  constructor(name, age, goals) {
    //! super is the main theme of extends of inheritence
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.#goals = goals;
  }
}

const messi = new FootballerMan("Messi", 28, 13);
console.log(messi.getPlayerDetails());
