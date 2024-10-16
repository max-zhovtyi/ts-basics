function add(a, b) {
  return a + b;
}

const result = add(1, 5);

console.log(result);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let max = new Person('Max', 22);
console.log('max:' , max);
console.log('max:' , max.name);
