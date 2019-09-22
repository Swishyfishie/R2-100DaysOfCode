let re;
// Literal Characters

re = /hello/;
re = /hello/i; // case sensitive

// Meta character Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/; // It has to start with hello and end with hello
re = /^h.llo/i; // matches any ONE character -- instead of the dot it can be any character
re = /h*llo/i; // matches any character ZERO or MORE times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // escape character

// Brackets [] -- Character Sets

re = /gr[ae]y/i; // MUST be an a or e
re = /[GF]ray/; // MUST be a G or F
re = /[^GF]ray/; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} -- Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly in the range {m, n}
re = /Hel{2,}o/i; // Must occur at least {m, }times

// Parentheses () -- Grouping
re = /^([0-9]x){3}/;

// Shorthand Character Classes

re = /\w/; // word character - any alphanumeric or _
re = /\w+/; // one or more word character - any alphanumeric or _
re = /\W/; // non word characters
re = /\d/; // Match any digit
re = /\d+/; // Match all the digits
re = /\D/; // Match any non digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell/i; // Word boundary -- looks for something that matches the word
re = /Hell\b/i; // Word boundary -- looks for the exact same word

// Assertions

re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if it's NOT followed by y

// String to match
const str = "xcd";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
