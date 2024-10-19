// const findMaxAverage = (nums, k) => { // [2, 3, 5, 6, 8, 1] , k = 2
//     let left = 0;
//     let avgSum = 0;
//     let currentSum = 0;
//     for (let i = 0; i < k; i++) { [2, 3]
//       currentSum += nums[i];
//       console.log(nums[i])
//     }

//     avgSum = currentSum / k;
  
//     for (let right = k; right < nums.length; right++) {
//       currentSum += nums[right] - nums[left];
//       avgSum = Math.max(currentSum / k, avgSum);
//       left++;
//     }
//     return avgSum;
//   };
//   const result = findMaxAverage([2, 3, 5, 6, 8, 1], 2);


// const createStar = (num) => {
//     const star = "*"
//     for (let i = 0; i < num; i++) {
//         let str = " ".repeat(num - i) // " "
//         for (let j = 0; j <= i; j++) {
//             str += "*" + " "
//         }
//         console.log(str)
//     }
//  }
//  createStar(5)

const isPrime = (num) => {
    let result = true
    for (let item = 2; item < num; item++) {
        if(num % item === 0){
            result = false
        }
    }
    // for (let i = 0; i < nums.length; i++) {
    //     let isTrue = true
    //    if(!except.includes(nums[i])){
    //     for (let j = 2; j < nums[i]; j++) {
    //         if(nums[i] % nums[j] === 0){
    //             isTrue = false
    //         }
    //        }
    //    }
    //    if(except.includes(nums[i])){
    //     isTrue = true
    //    }
    //    result.push(isTrue)
    // }
    return result
}

console.log(isPrime(83))