import { checkTree, TreeNode } from '../problems/root-equal-sum-of-children';

describe('CLI tests', () => {
  it('should print true if Tree is balanced and sum of parent node is equal to sum of children, else false', () => {
    expect(checkTree(new TreeNode(10, new TreeNode(4), new TreeNode(6)))).toBe(
      true
    );
    expect(checkTree(new TreeNode(12, new TreeNode(4), new TreeNode(6)))).toBe(
      false
    );
  });
});
