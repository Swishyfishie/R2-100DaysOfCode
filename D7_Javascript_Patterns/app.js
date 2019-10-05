// Basic structure

// (function() {
//   // Declare private variables and functions

//   return {
//     // Declare public variables and functions
//   };
// })();

// Standard Module Pattern
// const UICtrl = (function() {
//   let text = "Hello world";

//   const changeText = function() {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };
//   // the return is public
//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   };
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN

const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: "Car" });
