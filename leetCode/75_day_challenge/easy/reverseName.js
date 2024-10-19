// // // const reverseName = (string) => {
// // //     let newArr = []
// // //     let newStr = ""
// // //     for (let i = string.split(" ")[0].length - 1; i >= 0; i--) {
// // //         newStr += string.split(" ")[0][i]
// // //     }
// // //     newArr.push(newStr, string.split(" ")[1])
// // //     return newArr.join(" ")
// // // }
// // // console.log(reverseName("Manoj Sahu"))
// // const savedFile = {
// //   _id: {
// //     $oid: "667951bbbe488e36c6e8627d",
// //   },
// //   shipmentNo: "247-8410-8235910000",
// //   Liner: "American Airlines",
// //   BLno: "001-878888889",
// //   incoTerm: "FCA",
// //   bulkOrderIds: ["65aa7368ee90f9d754cc96e5", "65aa7379a8181043df66be96"],
// //   bookingID: "664b1a0f68745e1f41deafd0",
// //   packages: [
// //     {
// //       dimentions: {
// //         length: 3,
// //         width: 3,
// //         height: 3,
// //       },
// //       packageType: "Box",
// //       pkgGrossWt: "3",
// //       pkgWtUnit: "metric",
// //       pkgQty: 3,
// //       lineItems: [
// //         {
// //           itemName: "mobile",
// //           itemCode: "P965",
// //           description: "",
// //           qtyShipped: 10,
// //           orderId: "65aa7368ee90f9d754cc96e5",
// //           poNumber: "LA-3579437932025",
// //           price: 1000,
// //           quantity: 10,
// //           grossWeight: 150,
// //           weightUnit: "Kgs",
// //           volumeWeight: 250,
// //           subTotal: 2250,
// //           discountAmt: 11,
// //           discountPer: 10,
// //           total: 9000,
// //           dueDate: {
// //             $date: "2024-02-08T13:04:34.576Z",
// //           },
// //           notes: "",
// //           statusName: "Cargo Ready",
// //           _id: "65aa7368ee90f9d754cc96f0",
// //         },
// //         {
// //           itemName: "Garments",
// //           itemCode: "P965",
// //           description: "",
// //           qtyShipped: 10,
// //           orderId: "65aa7379a8181043df66be96",
// //           poNumber: "QI-6479672635426",
// //           price: 1000,
// //           quantity: 10,
// //           grossWeight: 150,
// //           weightUnit: "Kgs",
// //           volumeWeight: 250,
// //           subTotal: 2250,
// //           discountAmt: 11,
// //           discountPer: 10,
// //           total: 9000,
// //           dueDate: {
// //             $date: "2024-02-08T13:04:52.869Z",
// //           },
// //           notes: "",
// //           statusName: "Cargo Ready",
// //           _id: "65aa7379a8181043df66bea1"
// //         },
// //       ],
// //       _id: {
// //         $oid: "664b0f0014af590aa2e98631",
// //       },
// //     },
// //     {
// //       dimentions: {
// //         length: 2,
// //         width: 2,
// //         height: 2,
// //       },
// //       packageType: "Bag",
// //       pkgGrossWt: "2",
// //       pkgWtUnit: "metric",
// //       pkgQty: 2,
// //       lineItems: [
// //         {
// //           itemName: "paper",
// //           itemCode: "L897876",
// //           description: "",
// //           qtyShipped: 10,
// //           orderId: "65aa7368ee90f9d754cc96e5",
// //           poNumber: "LA-3579437932025",
// //           price: 1000,
// //           quantity: 10,
// //           grossWeight: 150,
// //           weightUnit: "Kgs",
// //           volumeWeight: 250,
// //           subTotal: 2250,
// //           discountAmt: 11,
// //           discountPer: 10,
// //           total: 9000,
// //           dueDate: {
// //             $date: "2024-02-08T13:04:34.576Z",
// //           },
// //           notes: "",
// //           statusName: "Cargo Ready",
// //           _id: "65aa7368ee90f9d754cc96f3"
// //         },
// //         {
// //           itemName: "Hanger",
// //           itemCode: "L897876",
// //           description: "",
// //           qtyShipped: 10,
// //           orderId: "65aa7379a8181043df66be96",
// //           poNumber: "QI-6479672635426",
// //           price: 1000,
// //           quantity: 10,
// //           grossWeight: 150,
// //           weightUnit: "Kgs",
// //           volumeWeight: 250,
// //           subTotal: 2250,
// //           discountAmt: 11,
// //           discountPer: 10,
// //           total: 9000,
// //           dueDate: {
// //             $date: "2024-02-08T13:04:52.869Z",
// //           },
// //           notes: "",
// //           statusName: "Cargo Ready",
// //           _id: "65aa7379a8181043df66bea4"
// //         },
// //       ],
// //       _id: {
// //         $oid: "664b0f0014af590aa2e98640",
// //       },
// //     },
// //     {
// //       dimentions: {
// //         length: 1,
// //         width: 1,
// //         height: 1,
// //       },
// //       packageType: "Pallet",
// //       pkgGrossWt: "1",
// //       pkgWtUnit: "metric",
// //       pkgQty: 1,
// //       lineItems: [
// //         {
// //           itemName: "charger",
// //           itemCode: "P678",
// //           description: "",
// //           qtyShipped: 10,
// //           orderId: "65aa7368ee90f9d754cc96e5",
// //           poNumber: "LA-3579437932025",
// //           price: 1000,
// //           quantity: 10,
// //           grossWeight: 23,
// //           weightUnit: "Kgs",
// //           volumeWeight: 121,
// //           subTotal: 2250,
// //           discountAmt: 11,
// //           discountPer: 10,
// //           total: 9000,
// //           dueDate: {
// //             $date: "2024-02-08T13:04:34.576Z",
// //           },
// //           notes: "",
// //           statusName: "Cargo Ready",
// //           _id:"65aa7368ee90f9d754cc96f6"
// //         },
// //         {
// //           itemName: "Chair",
// //           itemCode: "P678",
// //           description: "",
// //           qtyShipped: 10,
// //           orderId: "65aa7379a8181043df66be96",
// //           poNumber: "QI-6479672635426",
// //           price: 1000,
// //           quantity: 10,
// //           grossWeight: 23,
// //           weightUnit: "Kgs",
// //           volumeWeight: 121,
// //           dimensions: [
// //             {
// //               length: 121,
// //               height: 211,
// //               width: 109,
// //               _id: {
// //                 $oid: "65aa7379a8181043df66bea8",
// //               },
// //             },
// //           ],
// //           subTotal: 2250,
// //           discountAmt: 11,
// //           discountPer: 10,
// //           total: 9000,
// //           dueDate: {
// //             $date: "2024-02-08T13:04:52.869Z",
// //           },
// //           notes: "",
// //           statusName: "Cargo Ready",
// //           _id:"65aa7379a8181043df66bea7"
// //         },
// //       ],
// //       _id: {
// //         $oid: "664b0f0014af590aa2e9864f",
// //       },
// //     },
// //   ],
// // };

// // const updateThis = [
// //   {
// //     orderID: "66ab6b076bf18f58e0417b98",
// //     lineItemsIds: ["66ab6b076bf18f58e0417b99", "66ab6b076bf18f58e0417b9a"],
// //   },
// // ];

// // let updateOrder = new Map();
// // let newArra = [];
// // savedFile.packages.forEach((pkg) => {
// //   pkg.lineItems.forEach((line) => {
// //     if (!updateOrder.has(line.orderId)) {
// //       updateOrder.set(line.orderId, {
// //         lineIds: [line._id.toString()],
// //       });
// //     } else {
// //       let prevIds = [
// //         ...updateOrder.get(line.orderId).lineIds,
// //         line._id.toString(),
// //       ];
// //       updateOrder.set(line.orderId, { lineIds: prevIds });
// //     }
// //   });
// // });
// // updateOrder.forEach((value, key) => {
// //   newArra.push({
// //     orderID: key,
// //     lineItemsIds: value.lineIds,
// //   });
// // });

// // console.log(newArra)

// // const str = "13"
// // const number = new Number()
// // console.log(str.charCodeAt)
// // for (let i = 0; i < array.length; i++) {

// // }

// // function stringToNumber(str) {
// //     let num = 0;
// //     let isNegative = false;
// //     let i = 0;

// //     // Handle negative numbers
// //     if (str[0] === '-') {
// //         isNegative = true;
// //         i = 1;
// //     }

// //     while (i < str.length) {
// //         let digit = str.charCodeAt(i) - 48; // Convert char to digit ('0' has a char code of 48)
// //         if (digit < 0 || digit > 9) {
// //             throw new Error("Invalid character found");
// //         }
// //         num = num * 10 + digit;
// //         i++;
// //     }

// //     return isNegative ? -num : num;
// // }

// // const shipment = [
// //   {
// //     packages: [
// //       {
// //         dimentions: {
// //           length: 11,
// //           width: 123,
// //           height: 2345,
// //         },
// //         packageType: "Box",
// //         pkgGrossWt: "456",
// //         pkgWtUnit: "metric",
// //         pkgQty: 11,
// //         lineItems: [
// //           {
// //             itemName: "Case",
// //             itemCode: "P965",
// //             description: "",
// //             qtyShipped: 10,
// //             orderId: "663c95b25f8d269cb7df9c8a",
// //             poNumber: "HX-1110177787382",
// //             _id: "663c95b25f8d269cb7df9c90",
// //           },
// //           {
// //             itemName: "Bins",
// //             itemCode: "L897876",
// //             description: "",
// //             qtyShipped: 10,
// //             orderId: "663c95b25f8d269cb7df9c8a",
// //             poNumber: "HX-1110177787382",
// //             _id: "663c95b25f8d269cb7df9c93",
// //           },
// //           {
// //             itemName: "plastic",
// //             itemCode: "P965",
// //             description: "",
// //             qtyShipped: 10,
// //             orderId: "66459937fda5a746da50d5cf",
// //             poNumber: "IG-7842854066640",
// //             _id: "66459937fda5a746da50d5d7",
// //           },
// //         ],
// //         _id: {
// //           $oid: "66b34863ae3357594caf87bd",
// //         },
// //       },
// //     ],
// //   },
// // ];

// // let dataToUpdate = new Map();

// // shipment.forEach((item) => {
// //   item.packages.forEach((pkg) => {
// //     pkg.lineItems.forEach((line) => {
// //       if (dataToUpdate.has(line.orderId)) {
// //         let lineItems = dataToUpdate.get(line.orderId).updatedLines;
// //         let currentLine = lineItems.some(
// //           (currentLine) => currentLine._id === line._id
// //         );

// //         if (!currentLine) {
// //           lineItems = [
// //             ...lineItems,
// //             { _id: line._id, qtyShipped: line.qtyShipped },
// //           ];
// //         }
// //         const updatedLines = lineItems.map((i) => {
// //           if (i._id.toString() === line._id.toString()) {
// //             i.qtyShipped += line.qtyShipped;
// //           }
// //           return i;
// //         });
// //         dataToUpdate.set(line.orderId, { updatedLines: updatedLines });
// //       }
// //       if (!dataToUpdate.has(line.orderId)) {
// //         dataToUpdate.set(line.orderId, {
// //           updatedLines: [{ _id: line._id, qtyShipped: line.qtyShipped }],
// //         });
// //       }
// //     });
// //   });
// // });

// // dataToUpdate.forEach((value, key) => console.log(value));

// // const shipment = [
// //     {
// //       packages: [
// //         {
// //           dimentions: {
// //             length: 11,
// //             width: 123,
// //             height: 2345,
// //           },
// //           packageType: "Box",
// //           pkgGrossWt: "456",
// //           pkgWtUnit: "metric",
// //           pkgQty: 11,
// //           lineItems: [
// //             {
// //               itemName: "Case",
// //               itemCode: "P965",
// //               description: "",
// //               qtyShipped: 10,
// //               orderId: "663c95b25f8d269cb7df9c8a",
// //               poNumber: "HX-1110177787382",
// //               _id: "663c95b25f8d269cb7df9c90",
// //             },
// //             {
// //               itemName: "Bins",
// //               itemCode: "L897876",
// //               description: "",
// //               qtyShipped: 10,
// //               orderId: "663c95b25f8d269cb7df9c8a",
// //               poNumber: "HX-1110177787382",
// //               _id: "663c95b25f8d269cb7df9c93",
// //             },
// //             {
// //               itemName: "plastic",
// //               itemCode: "P965",
// //               description: "",
// //               qtyShipped: 10,
// //               orderId: "66459937fda5a746da50d5cf",
// //               poNumber: "IG-7842854066640",
// //               _id: "66459937fda5a746da50d5d7",
// //             },
// //           ],
// //           _id: {
// //             $oid: "66b34863ae3357594caf87bd",
// //           },
// //         },
// //       ],
// //     }
// //   ]

// //   let dataToUpdate = new Map();

// //   shipment.forEach((item) => {

// //     item.packages.forEach((pkg) => {

// //       pkg.lineItems.forEach((line) => {

// //         if (dataToUpdate.has(line.orderId)) {
// //           let lineItems = dataToUpdate.get(line.orderId).updatedLines;
// //           let currentLine = lineItems.find(
// //             (currentLine) => currentLine._id === line._id
// //           );

// //           if (!currentLine) {
// //             lineItems.push({ _id: line._id, qtyShipped: line.qtyShipped });
// //           } else {
// //             currentLine.qtyShipped += line.qtyShipped;
// //           }
// //         } else {
// //           dataToUpdate.set(line.orderId, {
// //             updatedLines: [{ _id: line._id, qtyShipped: line.qtyShipped }],
// //           });
// //         }
// //       });
// //     });
// //   });

// //   dataToUpdate.forEach((i, k) => console.log("Value -->", i,"Key ->", k,
// //   `
// //   ------------------------------
// //   `))

// // // console.log("Start")

// // // const promise = Promise(() => {
// // //   console.log("Promise")
// // // })

// // // console.log("End")

// const order = {
//   _id: "66bb1ecf05188c69af5cc06a",
//   lineItems: [
//     {
//       itemName: "Chair",
//       itemCode: "P965",
//       description: "",
//       price: 2500,
//       quantity: 20,
//       cargoQty: 20,
//       bookedQty: 20,
//       processedQty: 0,
//       grossWeight: 150,
//       weightUnit: "Kgs",
//       volumeWeight: 250,
//       dimensions: [
//         {
//           length: 120,
//           height: 130,
//           width: 140,
//           _id: {
//             $oid: "66bb1ecf05188c69af5cc072",
//           },
//         },
//       ],
//       subTotal: 2250,
//       discountAmt: 11,
//       discountPer: 10,
//       total: 225000,
//       dueDate: {
//         $date: "2025-09-26T00:00:00.000Z",
//       },
//       notes: "",
//       statusName: "Shipped",
//       lineItemStatus: [
//         {
//           statusName: "Pending",
//           statusDate: {
//             $date: "2025-10-26T00:00:00.000Z",
//           },
//           createdBy: "9cafd86c-cdfe-45b4-bacb-d21baab72dfa",
//           createdDate: {
//             $date: "2025-10-26T00:00:00.000Z",
//           },
//           _id: {
//             $oid: "66bb1ecf05188c69af5cc073",
//           },
//         },
//         {
//           statusName: "Accepted",
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:00.513Z",
//           },
//           _id: {
//             $oid: "66bb1eec60516d720059285b",
//           },
//           statusDate: {
//             $date: "2024-08-13T08:53:00.515Z",
//           },
//         },
//         {
//           statusName: "In Production",
//           statusDate: {
//             $date: "2024-08-13T08:52:56.914Z",
//           },
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:04.248Z",
//           },
//           _id: {
//             $oid: "66bb1ef0391b55d04f0ca11b",
//           },
//         },
//         {
//           statusName: "Production Completed",
//           statusDate: {
//             $date: "2024-08-13T08:52:56.914Z",
//           },
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:06.312Z",
//           },
//           _id: {
//             $oid: "66bb1ef2391b55d04f0ca19a",
//           },
//         },
//         {
//           statusName: "Cargo Ready",
//           statusDate: {
//             $date: "2024-08-13T08:52:56.914Z",
//           },
//           QtyPlaced: 20,
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:09.008Z",
//           },
//           _id: {
//             $oid: "66bb1ef5391b55d04f0ca23f",
//           },
//         },
//       ],
//       _id:"66bb1ecf05188c69af5cc071",
//       lineItemWiseProposeChange: [],
//       subLineItems: [],
//       cargoReadyDate: {
//         $date: "2024-08-13T08:52:56.914Z",
//       },
//     },
//     {
//       itemName: "Chair",
//       itemCode: "P965",
//       description: "",
//       price: 2500,
//       quantity: 20,
//       cargoQty: 20,
//       bookedQty: 20,
//       processedQty: 0,
//       grossWeight: 150,
//       weightUnit: "Kgs",
//       volumeWeight: 250,
//       dimensions: [
//         {
//           length: 120,
//           height: 130,
//           width: 140,
//           _id: {
//             $oid: "66bb1ecf05188c69af5cc075",
//           },
//         },
//       ],
//       subTotal: 2250,
//       discountAmt: 11,
//       discountPer: 10,
//       total: 225000,
//       dueDate: {
//         $date: "2025-09-26T00:00:00.000Z",
//       },
//       notes: "",
//       statusName: "Shipped",
//       lineItemStatus: [
//         {
//           statusName: "Pending",
//           statusDate: {
//             $date: "2025-10-26T00:00:00.000Z",
//           },
//           createdBy: "9cafd86c-cdfe-45b4-bacb-d21baab72dfa",
//           createdDate: {
//             $date: "2025-10-26T00:00:00.000Z",
//           },
//           _id: {
//             $oid: "66bb1ecf05188c69af5cc076",
//           },
//         },
//         {
//           statusName: "Accepted",
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:00.513Z",
//           },
//           _id: {
//             $oid: "66bb1eec60516d720059285b",
//           },
//           statusDate: {
//             $date: "2024-08-13T08:53:00.515Z",
//           },
//         },
//         {
//           statusName: "In Production",
//           statusDate: {
//             $date: "2024-08-13T08:52:56.915Z",
//           },
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:05.114Z",
//           },
//           _id: {
//             $oid: "66bb1ef1391b55d04f0ca150",
//           },
//         },
//         {
//           statusName: "Production Completed",
//           statusDate: {
//             $date: "2024-08-13T08:52:56.915Z",
//           },
//           QtyPlaced: 20,
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:07.510Z",
//           },
//           _id: {
//             $oid: "66bb1ef3391b55d04f0ca1e9",
//           },
//         },
//         {
//           statusName: "Cargo Ready",
//           statusDate: {
//             $date: "2024-08-13T08:52:56.915Z",
//           },
//           QtyPlaced: 20,
//           createdBy: "9846512d-f8c1-4860-989d-fa08d81c2fdf",
//           createdDate: {
//             $date: "2024-08-13T08:53:10.680Z",
//           },
//           _id: {
//             $oid: "66bb1ef660516d7200592910",
//           },
//         },
//       ],
//       _id: {
//         $oid: "66bb1ecf05188c69af5cc074",
//       },
//       lineItemWiseProposeChange: [],
//       subLineItems: [],
//       cargoReadyDate: {
//         $date: "2024-08-13T08:52:56.915Z",
//       },
//     },
//   ],
// };

// const { lineItems, statusHistory } = order;

// const updatedLines = lineItems.map((line) => {
//   // value.forEach((v) => {
//     if ("66bb1ecf05188c69af5cc071" === line._id.toString()) {


//       line.bookedQty += 10;

//       if (line.bookedQty === line.quantity) {
//         line.statusName = enumStatus("shipped");
//         line.lineItemStatus = [
//           ...line.lineItemStatus,
//           {
//             statusName: enumStatus("shipped"),
//             statusDate: new Date(),
//             createdBy: req.sub,
//             createdDate: new Date(),
//           },
//         ];
//       }
//     }
//   // });

//   return line;
// });

// console.log("updatedLines -->",updatedLines)
