class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error("Имя должно быть от 2 до 10 символов");
    }
    
    const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(
        "Тип должен быть отдним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
      );
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp = () => {
    if (this.health < 1) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
    this.health = 100;
  };

  damage = (points) => {
    if (health >= 0) {
      this.health -= points * (1 - defence / 100);
    } else {
      throw new Error("Персонаж мёрт");
    }
  };
}

class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 10;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

export { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie };


/*
const dimon = new Daemon("Dimon");
console.log(
  `Dimon(lvl ${dimon.level}) health: ${dimon.health} attack: ${dimon.attack} defense: ${dimon.defence}`
  );
  
dimon.levelUp();
console.log(
  `Dimon(${dimon.level}) health: ${dimon.health} attack: ${dimon.attack} defense: ${dimon.defence}`
);
*/