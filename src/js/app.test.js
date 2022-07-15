import { Character, Zombie } from "./app";

const normalName = "Annie";
const longName = "Schrederchanianovich";
const shortName = "I";
const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

test("длина имени от 2 до 10 символов", () => {
  const input = normalName;
  const expected = input;

  const charachter = new Character(input, "Bowman");
  const received = charachter.name;
  expect(received).toBe(expected);
});

test("короткое имя выбрасывает ошибку", () => {
  const expected = "Имя должно быть от 2 до 10 символов";
  const t = () => {
    new Character(shortName, "Bowman");
  };

  expect(t).toThrow(expected);
});

test("длинное имя выбрасывает ошибку", () => {
  const expected = "Имя должно быть от 2 до 10 символов";
  const t = () => {
    new Character(longName, "Bowman");
  };

  expect(t).toThrow(expected);
});

test("неправильный тип выбрасывает ошибку", () => {
  const expected =
    "Тип должен быть отдним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie";
  const t = () => {
    new Character("Annie", "Cat");
  };
  expect(t).toThrow(expected);
});

test("Здоровье 0 выбрасывает ошибку", () => {
  const expected = "Нельзя повысить левел умершего";
  const character = new Character("Annie", "Bowman");
  character.health = 0;
  const t = () => {
    character.levelUp();
  };
  expect(t).toThrow(expected);
});

test("levelUp повышает уровень", () => {
  const zombieShawn = new Zombie("Shawn");
  const level1 = zombieShawn.level;
  zombieShawn.levelUp();
  const level2 = zombieShawn.level

  expect(level2).toBe(level1+1);
});


test("damage понижает уровень", () => {
  const zombieShawn = new Zombie("Shawn");
  const health1 = zombieShawn.health;
  const points = 10

  zombieShawn.damage(points);
  const health2 = zombieShawn.health

  expect(health2).toBe(health1 - points * (1 - zombieShawn.defence / 100));
});

test("Здоровье 0 - персонаж мёртв", () => {
  const expected = "Персонаж мёрт";
  const t = () => {
    const annie = new Character("Annie", "Zombie");
    annie.health = -10
    annie.damage()
  };

  expect(t).toThrow(expected);
});