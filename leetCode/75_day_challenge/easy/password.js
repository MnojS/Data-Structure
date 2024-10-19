const validPass = (string) => {
  let char = "9";
  let small = false;
  let upper = false;
  let number = false;
  let uniq = false;
  let adj = true;
  let special = "!@#$%^&*()_+".split("");

  for (let item = 0; item < string.length; item++) {
    
    if (string[item].charCodeAt(0) >= 97 && string[item].charCodeAt(0) <= 122) {
      small = true;
    }
    if (string[item].charCodeAt(0) >= 65 && string[item].charCodeAt(0) <= 90) {
      upper = true;
    }
    if (string[item].charCodeAt(0) >= 48 && string[item].charCodeAt(0) <= 57) {
      number = true;
    }
    if (special.includes(string[item])) {
      uniq = true;
    }
    if (item > 0 && string[item] === string[item - 1]) {
      adj = false;
    }
  }
  return valid;
};

console.log(validPass("manojsShu@"));
