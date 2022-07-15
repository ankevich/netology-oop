import { Character } from "./app";

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
  const input = shortName;
  const expected = "Имя должно быть от 2 до 10 символов";

  var charachter;
  const t = () => {
    charachter = new Character(input, "Bowman");
  };

  expect(t).toThrow(expected);
});

test("длинное имя выбрасывает ошибку", () => {
  const input = longName;
  const expected = "Имя должно быть от 2 до 10 символов";

  var charachter;
  const t = () => {
    charachter = new Character(input, "Bowman");
  };

  expect(t).toThrow(expected);
});

test("неправильный тип выбрасывает ошибку", () => {
  const expected = "Тип должен быть отдним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie";

  var charachter;
  const t = () => {
    charachter = new Character("Annie", "Cat");
  };

  expect(t).toThrow(expected);
});
