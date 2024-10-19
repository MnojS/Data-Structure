const compressed = (arr) => {
  const count = new Map();
  let result = []
  let values = []
  arr.forEach((item) => {
    if (!count.has(item)) {
      count.set(item, 1);
    } else {
      let getData = count.get(item);
      console.log("before", getData)
      count.set(item, 1+ getData);

    }
  });
  count.forEach((value, key) => {
    result.push(value)
    values.push(key)
  })
//   result = values.concat(result)
// console.log("result -->",result, count)
  let newArr = []
  for (let i = 0; i < result.length; i++) {
    newArr.push(result[i])
    console.log("---",result[i])
    console.log(count.get(result[i]))
    newArr.push(count[i])
  }
  return result
};

const result = compressed(["a","a","b","b","c","c","c"])
console.log("result -->",result)