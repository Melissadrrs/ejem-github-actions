const {formula} = require("./index");

test("duplicate ok", () => {
  expect(formula(5)).toStrictEqual(10);
});

test("duplicate bad", () => {
  expect(formula()).toBe(NaN);
});


