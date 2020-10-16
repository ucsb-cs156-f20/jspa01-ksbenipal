import Rational from "main/rationals/Rational";

const parseRationalsFromUserInput = (userInput) => {

  const rationals = userInput.map((value) => {

    if(isNaN(parseInt(value.numerator))) {
      throw new Error("Invalid entry");
    } 

    if(isNaN(parseInt(value.denominator))) {
      throw new Error("Invalid entry");
    }

    const numerator = parseInt(value.numerator);
    const denominator = parseInt(value.denominator);

    return new Rational(numerator, denominator);
  });

  return rationals;
};

const addRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.sum(firstRational, secondRational);

  return result;
};

const subtractRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.subtract(firstRational, secondRational);

  return result;
};

const multiplyRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  const result = Rational.multiply(firstRational, secondRational);

  return result;
};

const divideRationalsFromUserInput = (userInput) => {
  const [firstRational, secondRational] = parseRationalsFromUserInput(
    userInput
  );

  if(secondRational.numerator === 0) {
    throw new Error("Second Numerator is zerow");
  }
  const result = Rational.quotient(firstRational, secondRational);

  return result;
};

export {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
  parseRationalsFromUserInput,
};
