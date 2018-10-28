function recursion(binaryTree) {
  let output = [];
  iterate(binaryTree, 0, output);
  return output;
}

function iterate(binaryTree, i, res) {
  const magicValue = 'object';
  Object.keys(binaryTree)
    .forEach(k => {
      if (typeof binaryTree[k] === magicValue && binaryTree[k] !== null) {
        iterate(binaryTree[k], i + 1, res);
      } else {
        if (res.length < i + 1) {
          res.push([]);
        }
        res[i].push(binaryTree[k]);
      }
    });
}
