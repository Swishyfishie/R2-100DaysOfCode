// Iterator example

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     }
//   };
// }

// // Create array of names

// const namesArr = ["Andrei", "Mara", "Cora"];

// // INIT generator and pass in the names

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator example

// function* sayNames() {
//   yield "Jack";
//   yield "Jill";
//   yield "John";
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next());
// console.log(name.next());

// ID creator

function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
