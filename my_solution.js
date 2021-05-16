class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function smallestBT (root) {
    if(!root) return null
    
    let left = smallestBT(root.left)
    let right = smallestBT(root.right)
    
    
    let lowest = root.value
    
       if(left && left < lowest) lowest = left
       if(right && right < lowest) lowest = right
    
    return lowest
}

// test
const t1 = new TreeNode(5, 
                        new TreeNode(2,
                                    new TreeNode(2),
                                    new TreeNode(4)),
                        new TreeNode(7,
                                    new TreeNode(6),
                                    new TreeNode(8)))
const t2 = new TreeNode(2, new TreeNode(1))
const t3 = new TreeNode(3)
console.log(smallestBT(t1), 'expect 2')
console.log(smallestBT(t2), 'expect 1')
console.log(smallestBT(t3), 'expect 3')
console.log(smallestBT(null), 'expect null')
