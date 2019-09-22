let re;
re = /hello/;
re = /hello/g; // g --  global search
re = /hello/i; //case sensitive // i = case insensitive

// console.log(re);
// console.log(re.source);

// exec() - Returns the result in an array if there's a match or a null if there's not a match

// const result = re.exec("hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false if there's a match

// const result = re.test("Hello gasdf hello world");

// console.log(result);

// match() - Return result array or null

// const str = "Hello There";
// const result = str.match(re);

// console.log(result);

// search() - Return index of the first match and if not found it returns -1

// const str = " there hello";

// const result = str.search(re);

// console.log(result);

// replace() - Return a new string with some or all matches of a pattern

const str = "Hello There Hello brother";

const newString = str.replace(re, "hi");

console.log(newString);
