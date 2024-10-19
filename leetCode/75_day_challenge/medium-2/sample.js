// function buildTree(entity, treeNode, visited = new Set()) {
//   if (visited.has(entity._id)) {
//     return { ...entity, myChildren: [] }; 
//   }
//   visited.add(entity._id);
//   const myChildren = treeNode
//     .filter((desc) => entity.children.includes(desc._id))
//     .map((child) => buildTree(child, treeNode, visited)); 
//   delete entity.treeNode
//   return { ...entity, myChildren };
// }

// const data = [
//   {
//     _id: 510,
//     children: [3, 45, 6],
//     treeNode: [
//       { _id: 89, name: "Anshul", children: [43] },
//       { _id: 3, name: "Manoj", children: [2] },
//       { _id: 2, name: "hello", children: [77] },
//       { _id: 77, name: "abhi", children: [] },
//       { _id: 45, name: "Manoj", children: [] },
//       { _id: 6, name: "first", children: [4] },
//       { _id: 4, name: "saurav", children: [89] },
//       { _id: 43, name: "last", children: [] },
//     ],
//   },
// ];

// // Assuming data[0] is the root entity
// const rootEntity = data[0];
// const tree = buildTree(rootEntity, rootEntity.treeNode);

// console.log(JSON.stringify(tree, null, 2));
