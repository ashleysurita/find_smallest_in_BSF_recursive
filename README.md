# find_smallest_value_in_BSF_recursive

### Problem:
```
class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function smallestBT (root) {
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
```
