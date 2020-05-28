interface INode {
    val?: number,
    left?: INode,
    right?: INode,
    parent?: INode,
}

export const buildTree = (preorder : number[], inorder : number[]) : INode => {
    return helper(0, 0, inorder.length - 1, preorder, inorder);
}

const helper = (preorderStart : number, inorderStart : number, inorderEnd,
    preorder : number[], inorder : number[]) : INode => {
        if (preorderStart > preorder.length - 1 || inorderStart > inorderEnd) {
            return null;
        }
        let root : INode = {};
        root.val = preorder[preorderStart];
        // find the root in the inorder list
        let newRoot = 0;
        newRoot = findNextRoot(inorder, inorderStart, inorderEnd, root.val);

        // return inorderStart to the found inorderEnd to explore left side
        root.left = helper(preorderStart + 1, inorderStart, newRoot, preorder, inorder);

        // return inorderStart + 1 to inorderEnd
        // the VALUE of the next root is derived by skipping the left subtrees in preorder.
        root.right = helper(preorderStart + newRoot - inorderStart + 1 ,newRoot + 1, inorderEnd, preorder, inorder);
        return root;
}

const findNextRoot = (inorder : number[], start: number, end: number, val : number) => {
    for (let i=start; i<=end; i++) {
        if (inorder[i] === val) {
            return i;
        }
    }
    return -1;
}
