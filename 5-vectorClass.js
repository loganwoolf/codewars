/*
Create a Vector object that supports addition,
subtraction, dot products, and norms.
So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above,
a.toString() === '(1,2,3)'
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/

class Vector {
  constructor(arr) {
    this.dim = arr;
  }

  add(vec) {
    if (this.dim.length !== vec.dim.length) {
      throw new Error('incompatible vectors');
    }
    return new Vector(this.dim.map((value, i) => value + vec.dim[i]));
  }

  subtract(vec) {
    if (this.dim.length !== vec.dim.length) {
      throw new Error('incompatible vectors');
    }
    return new Vector(this.dim.map((value, i) => value - vec.dim[i]));
  }

  dot(vec) {
    if (this.dim.length !== vec.dim.length) {
      throw new Error('incompatible vectors');
    }
    return this.dim.reduce(
      (acc, value, index) => value * vec.dim[index] + acc,
      0,
    );
  }

  norm() {
    return Math.sqrt(this.dim.reduce((acc, value) => value * value + acc, 0));
  }

  equals(vec) {
    if (this.dim.length !== vec.dim.length) {
      return false;
    }
    return this.dim.every((value, i) => value === vec.dim[i]);
  }

  toString() {
    return `(${this.dim.join()})`;
  }
}

const a = new Vector([1, 3, 2]);
/* eslint-disable no-console */
console.log(a.toString());
