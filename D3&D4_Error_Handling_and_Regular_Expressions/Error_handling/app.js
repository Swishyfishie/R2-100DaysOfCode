const user = { email: "email@gmail.com" };

try {
  // ReferenceError
  // myFunction();

  // TypeError
  // null.myFunction();

  if (!user.name) {
    throw "User has no name";
  }
} catch (err) {
  console.log(err);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof TypeError);
} finally {
  console.log("Finally runs regardless of result...");
}

console.log("Program continues");
