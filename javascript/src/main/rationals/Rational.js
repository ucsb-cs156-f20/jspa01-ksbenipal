import { gcd, lcm } from "./Helpers";

export default class Rational {
  constructor(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error(
        `Incorrect types passed to Rational constructor; got ${typeof numerator} and ${typeof denominator}`
      );
    }

    this.numerator = Math.trunc(numerator);
    this.denominator = Math.trunc(denominator);
    
    if (this.denominator === 0) {
      throw new Error("The denominator is equal to 0.");
    }

    if (this.numerator !== 0) {
      const greatestCommonDivisor = gcd(this.numerator, this.denominator);
      this.numerator /= greatestCommonDivisor;
      this.denominator /= greatestCommonDivisor;
    }

    if (this.denominator < 0 ) {
      if (this.numerator < 0) {
        this.numerator = Math.abs(this.numerator);
        this.denominator = Math.abs(this.denominator);
      } else {
        this.denominator = Math.abs(this.denominator);
        this.numerator = -Math.abs(this.numerator);
      }
    }
  }

  toString() {
    return "";
    
  }

  plus(other) {
    Rational.verifyIsRational(other);
    if (this.numerator === 0)
      return new Rational(other.numerator, other.denominator);
    if (other.numerator === 0)
      return new Rational(this.numerator, this.denominator);

    const numGCD = gcd(this.numerator, other.numerator);
    const denomGCD = gcd(this.denominator, other.denominator);

    const numerator =
      (this.numerator / numGCD) * (other.denominator / denomGCD) +
      (other.numerator / numGCD) * (this.denominator / denomGCD);
    const denominator = lcm(this.denominator, other.denominator);

    return new Rational(numerator, denominator);
  }

  static sum(first, second) {
    Rational.verifyIsRational(first);
    Rational.verifyIsRational(second);

    return first.plus(second);
  }

  times(other) {
    Rational.verifyIsRational(other);
    
    if(other.numerator === 0) {
      const numerator = 0
    } 
    const numerator = (this.numerator * other.numerator);
    const denominator = (this.denominator * other.denominator);
    
    return new Rational(numerator, denominator);
  
  }
  

  static multiply(first, second) {
    Rational.verifyIsRational(first);
    Rational.verifyIsRational(second);

    return first.times(second);
  }

  minus(other) {
    Rational.verifyIsRational(other);
    if (this.numerator === 0)
      return new Rational(other.numerator, other.denominator);
    if (other.numerator === 0)
      return new Rational(this.numerator, this.denominator);

    const numGCD = gcd(this.numerator, other.numerator);
    const denomGCD = gcd(this.denominator, other.denominator);

    const numerator =
      (this.numerator / numGCD) * (other.denominator / denomGCD) -
      (other.numerator / numGCD) * (this.denominator / denomGCD);
    const denominator = lcm(this.denominator, other.denominator);

    return new Rational(numerator, denominator);
  }

  static subtract(first, second) {
    Rational.verifyIsRational(first);
    Rational.verifyIsRational(second);

    return first.minus(second);
  }

  reciprocal() {
    if (this.denominator === 0 | this.numerator === 0) {
      throw new Error("The denominator/numerator is equal to 0.");
    }
    
    const numerator = this.denominator;
    const denominator = this.numerator;

    return new Rational(numerator, denominator);

  }

  dividedBy(other) {
    Rational.verifyIsRational(other);
    
    const numerator = (this.numerator * other.denominator);
    const denominator = (this.denominator * other.numerator);
    
    return new Rational(numerator, denominator);
  }

  static quotient(first, second) {
    Rational.verifyIsRational(first);
    Rational.verifyIsRational(second);

    return first.dividedBy(second);
  }

  static verifyIsRational(object) {
    if (!(object instanceof Rational)) {
      throw new Error(`Not a Rational object; instead was ${object.__proto__}`);
    }
    return true;
  }
}
