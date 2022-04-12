/**
 * In a singleton design pattern, only one object is created for each
 * interface (class or function) and the same object is returned every time when called.
 */

class Singleton {
  constructor() {
    this.instance = null;
  }
  createInstance() {
    const obj = new Object("I am constructor");
    this.instance = obj;
    return this.instance;
  }
  getInstance() {
    if (!this.instance) {
      return this.createInstance();
    }
    return this.instance;
  }
}

let s1 = new Singleton();

console.log(s1.getInstance() === s1.getInstance());
