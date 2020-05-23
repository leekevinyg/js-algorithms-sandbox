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
        let root : INode = {};
        root.val = preorder[preorderStart];
        
        // root.left = helper(preorderIndex + 1,  );
        // root.right = helper();
        return root;
}
