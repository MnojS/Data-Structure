const parenthesis = (string) => {
  let stack = [];
  let closing = [")", "}", "]"];
  for (let i = 0; i < string.length; i++) {
    if (closing.includes(string[i])) {
      switch (string[i]) {
        case ")":
          if (stack[stack.length - 1] === "(") {
            stack.pop();
          }
          break;
        case "}":
          if (stack[stack.length - 1] === "{") {
            stack.pop();
          }
          break;
        case "]":
          if (stack[stack.length - 1] === "[") {
            stack.pop();
          }
          break;
        default:
          break;
      }
    } else {
      stack.push(string[i]);
    }
  }
  return stack.length === 0;
};

const result = parenthesis("({([]))");
console.log(result);
