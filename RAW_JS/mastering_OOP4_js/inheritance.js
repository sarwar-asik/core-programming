// common Class ///

class PlayerCommon {
  constructor(name, age) {
    this.name = name;

    this.age = age;
  }

  getPlayerDetails() {
    return `name=${this.name} , age=${this.age}`;
  }
}

// cricketer Class

class Cricketer extends PlayerCommon {
  ///extends is  important for inheritence

  #centuries;

  constructor(name, age, centuries) {
    //! super is the main theme of extends of inheritence

    super(name, age);

    // this.name = name;

    // this.age = age;

    this.#centuries = centuries;
  }
}

const player1 = new Cricketer("Tamim", 30, 10);

console.log(player1.getPlayerDetails());

// footballer  Class

class Footballer extends PlayerCommon {
  #goals;

  constructor(name, age, goals) {
    //! super is the main theme of extends of inheritence

    super(name, age);

    // this.name = name;

    // this.age = age;

    this.#goals = goals;
  }
}

const messi = new Footballer("Messi", 28, 13);

console.log(messi.getPlayerDetails());
