/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthRecursion(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) minDepthRecursion(node.right) + 1;
      if (node.right === null) minDepthRecursion(node.left) + 1;
      return (
        Math.min(minDepthRecursion(node.left), minDepthRecursion(node.right)) +
        1
      );
    }
    return minDepthRecursion(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthRecursion(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) maxDepthRecursion(node.right) + 1;
      if (node.right === null) maxDepthRecursion(node.left) + 1;
      return (
        Math.max(maxDepthRecursion(node.left), maxDepthRecursion(node.right)) +
        1
      );
    }
    return maxDepthRecursion(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;
    if (!this.root) return 0;
    function maxSumRecursion(node) {
      if (node === null) return 0;
      let leftTotal = maxSumRecursion(node.left);
      let rightTotal = maxSumRecursion(node.right);
      result = Math.max(result, node.val + leftTotal + rightTotal);
      return Math.max(0, leftTotal + node.val, rightTotal + node.val);
    }
    maxSumRecursion(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let smallest = null;
    if (!this.root) return null;

    function nextLargerRecursion(node) {
      if (smallest === null) {
        if (node.val > lowerBound) {
          smallest = node.val;
          if (node.left === null && node.right === null) return smallest;
          if (node.left === null)
            return Math.min(smallest, nextLargerRecursion(node.right));
          if (node.right === null)
            return Math.min(smallest, nextLargerRecursion(node.left));
          return Math.min(
            smallest,
            nextLargerRecursion(node.left),
            nextLargerRecursion(node.right)
          );
        }
      }
      if (lowerBound < node.val && node.val < smallest) {
        smallest = node.val;
        if (node.left === null && node.right === null) return smallest;
        if (node.left === null)
          return Math.min(smallest, nextLargerRecursion(node.right));
        if (node.right === null)
          return Math.min(smallest, nextLargerRecursion(node.left));
        return Math.min(
          smallest,
          nextLargerRecursion(node.left),
          nextLargerRecursion(node.right)
        );
      } else {
        if (node.left === null && node.right === null) return smallest;
        if (node.left === null)
          return Math.min(smallest, nextLargerRecursion(node.right));
        if (node.right === null)
          return Math.min(smallest, nextLargerRecursion(node.left));
        return Math.min(
          smallest,
          nextLargerRecursion(node.left),
          nextLargerRecursion(node.right)
        );
      }
    }
    nextLargerRecursion(this.root);
    return smallest
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
