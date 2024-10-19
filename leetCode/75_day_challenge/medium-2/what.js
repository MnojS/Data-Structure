// // function instance() {
// //     let singletonMap = null;

// //     function getSingletonMap() {
// //       if (!singletonMap) {
// //         singletonMap = new Map();
// //         singletonMap.set("key", {
// //           age: 18,
// //         });
// //       }
// //       return singletonMap;
// //     }

// //     const map1 = getSingletonMap();
// //     const map2 = getSingletonMap();

// //     console.log(map1 === map2); // Output: true (same instance)

// //     map1.get("key").age = 19;
// //     console.log(map2.get("key").age); // Output: 19 (updated age shared by both)
// //   }

// //   instance();

// let array = [1, 3, 2, 5, 6, 6]
//   .sort((a, b) => b - a)
//   .map((item) => item.toString());
// console.log(array)[

// ];

// const status = [
//   "New",
//   "Partially Accepted",
//   "Accepted",
//   "In Production",
//   "Production Completed",
//   "Partially Cargo Ready",
//   "Cargo Ready",
//   "Partially Packed",
//   "Packed",
// ];

// let pushData = true;
// const newStatus = "Shipped";

// const newStatusIndex = status.indexOf(newStatus);

// const maxHistoryIndex = Math.max(
//   ...statusHistory.map((history) => status.indexOf(history.statusName))
// );

// if (
//   newStatusIndex <= maxHistoryIndex ||
//   statusHistory.some((h) => h.statusName === newStatus)
// ) {
//   pushData = false;
// }

// console.log(pushData);

// const array = [
//   {
//     $match : {
//       zti: "0"
//     }
//   },
//   {
//     $unwind : "zti"
//   },
//   {
//     $project : {
//       _id:1
//     }
//   }
// ]
// array.splice(1,0, {$hello : "hiuh"})
// console.log(array)

const array = [];

