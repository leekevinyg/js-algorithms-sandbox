var serialize = function(root) {
    let preorderTraversal = [];
    let preorder = (root) => {
        preorderTraversal.push(root ? root.val : 'none');
        if (root === null) {
            return;
        }
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return preorderTraversal.toString();
 };
 
 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
     let tree = data.split(',');
     console.log(tree);
     return rdeserialize(tree);
 };
 
 const rdeserialize =  (tree) => {
     let next = tree.shift();
     if (next === 'none') {
         return null;
     }
     let root = {
         val: next,
     }
     root.left = rdeserialize(tree);
     root.right = rdeserialize(tree);
     return root;
 } 