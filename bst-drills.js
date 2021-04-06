const BinarySearchTree = require('binarySearchTree');

// 3. Create a BST class
function numbers() {
  let BST = new BinarySearchTree();
  const num = [3, 1, 4, 6, 9, 2, 5, 7];
  num.forEach((element) => BST.insert(element));
  return BST;
}

// console.log(numbers());

function letters() {
  let BST = new BinarySearchTree();
  const lets = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  lets.forEach((element) => BST.insert(element));
  return BST;
}

console.log(letters());

// 4. Returns a sum of the left, right, and value of the binary tree provided to it
// 5. Height of a BST
function bstHeight(bst) {
  if (bst === null) {
    return 0;
  } else {
    let heightL = bstHeight(bst.left);
    let heightR = bstHeight(bst.right);
    if (heightL > heightR) {
      return heightL + 1;
    } else {
      return heightR + 1;
    }
  }
}

console.log(bstHeight(letters()));

// 6. Is it a BST?
function isBst(bst) {
  if (!bst.left && !bst.right) {
    return true;
  }
  if (bst.left) {
    if (bst.left.value >= bst.value) {
      return false;
    }
    isBst(bst.left);
  }
  if (bst.right) {
    if (bst.right.value <= bst.value) {
      return false;
    }
    isBst(bst.right);
  }
  return true;
}

console.log(isBst(bstSample()));

// 7. 3rd largest node
function thirdLargestN(tree) {
  const height = bstHeight(tree);
  if (height < 2) {
    return null;
  } else if (height < 3) {
    if (tree.left && tree.right) {
      return tree.left.value;
    } else {
      return null;
    }
  } else if (height > 3) {
    return thirdLargestN(tree.right);
  } else {
    return tree.key;
  }
}

console.log(thirdLargestN(bstSample()));

// 8. Balanced BST
function isBalanced(tree) {
  if (!tree) {
    return false;
  }
  if (!tree.right && !tree.left) {
    return true;
  }
  if (Math.abs(bstHeight(tree.right) - bstHeight(tree.left)) > 1) {
    return false;
  }
  return true;
}

console.log(isBalanced(bstSample()));

// 9. Are they the same BSTs?
function isSameBST(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (array1.length === 0) {
    return true;
  }
  if (array1[0] !== array2[0]) {
    return false;
  }
  let leftArray1 = array1.filter((i) => i < array1[0]);
  let rightArray1 = array1.filter((i) => i > array1[0]);
  let leftArray2 = array2.filter((i) => i < array2[0]);
  let rightArray2 = array2.filter((i) => i > array2[0]);
  return !isSameBST(leftArray1, leftArray2)
    ? false
    : isSameBST(rightArray1, rightArray2)
    ? true
    : false;
}

const nums1 = [3, 5, 4, 6, 1, 0, 2];
const nums2 = [3, 1, 5, 2, 4, 6, 0];
const nums3 = [3, 1, 4, 6, 0, 2, 5];

console.log(isSameBST(nums1, nums2));
console.log(isSameBST(nums2, nums3));
