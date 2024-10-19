const combination = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      console.log(`${string[i]} ${string[j]}`);
    }
  }
};
console.log(combination("abcd"));
