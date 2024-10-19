const maxString = (string) => {
  string = string.split("");
  let newString = [];

  for (let i = 0; i < string.length; i++) {
    if (
      !newString.includes(string[i]) ||
      (newString[newString.length - 1] === string[0] && string[i] === string[1])
    ) {
      newString.push(string[i]);
    }
  }

  console.log(newString.join(""));
};

maxString("geksforgeks"); // geeksfor
maxString("abcdabc"); // abcd
