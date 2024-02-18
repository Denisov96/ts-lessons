// Number variable:
// Declare a variable myNumber and assign it a numerical value
export function declareNumber(): number {
  const myNumber: number = 33
  
  return myNumber;
}

// Sum numbers:
// Declare a variable sum that is a result of summation of vars a and b
export function sumNumbers(): number {
  const a = 6;
  const b = 12;
 const sum = a + b

  return sum;
}

// Divide numbers:
// Declare a variable result that is a result of division of num1 on num2
export function divideNumbers(num1: number, num2: number): number {
  const result = num1 / num2;
  return result;
}

// Universal law of gravitation:
// Declare variable force which contains a value of force of gravity
// using Newton's formula https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation
// where first mass is 2 million kg
// second mass is 1000 kg
// distance between masses is 20 meters
// gravitational constant is 6.674×10^−11
export function newtonGravity(): number {
  const G = 6.674 * Math.pow(10, -11);
  const m1 = 2e6;
  const m2 = 1000;
  const r = 20;
  const force = (G * m1 * m2) / Math.pow(r, 2);
  return force;
}

export function sumNumbers1(): number {
const a = 983
const b = 666
const c = 579
const sum = a + b + c 
return sum
}