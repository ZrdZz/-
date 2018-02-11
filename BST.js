//二叉搜索树左子树的所有节点值均小于根节点的值,右子树的所有节点值均大于根节点的值

//节点定义
function Node(value){
	this.value = value;
	this.left = left;
	this.right = right;
}

function BinarySearchTree(){
	this.root = null;
} 

BinarySearchTree.prototype.insert = function(value){
	let newNode = new Node(value);

	let _insertNode = function(node, newNode){
		if(newNode.value < node.value){
			if(node.left === null){
				node.left = newNode;
			}else{
				_insertNode(node.left, newNode);
			}
		}else{
			if(newNode.value > node.value){
				if(node.right === null){
					node.right = newNode;
				}else{
					_insertNode(node.right, newNode);
				}				
			}
		}
	}

	if(this.root === null){
		this.root = newNode;
	}else{
		_insertNode(this.root, newNode);
	}
}

//先序遍历
BinarySearchTree.prototype.preOrderTraverse = function(func){
    function preOrderTraverseNode(node, func){
        if(node !== null){
            func(node.value);
            preOrderTraverseNode(node.left, func);
            preOrderTraverseNode(node.right, func);
        }
    }

    preOrderTraverseNode(this.root, func);
}

//先序遍历循环实现
// BinarySearchTree.prototype.preOrderTraverse = function(func){
//     var stack = [],
//         current = this.root;

//     while(current || stack.length > 0){
//         //输出节点,然后入栈
//         //若其左节点不为空则重复上面的操作
//         func(current.value);
//         stack.push(current);
//         current = current.left;

//         //若为空则出栈,并将当前节点置为他的右节点
//         //若右节点为空则继续出栈,不为空则重复上面的操作
//         while(!current && stack.length > 0){
//             current = stack.pop().right;
//         }
//     }
// }

//中序遍历
BinarySearchTree.prototype.inOrderTraverse = function(func){
    function inOrderTraverseNode(node, func){
        if(node !== null){
            inOrderTraverseNode(node.left, func);
            func(node.value);
            inOrderTraverseNode(node.right, func);
        }
    }

    inOrderTraverseNode(this.root, func);
}

//中序遍历循环实现
// BinarySearchTree.prototype.inOrderTraverse = function(func){
//     var stack = [],
//         current = this.root;

//     while(current || stack.length > 0){
//         //若左节点不为空,则将其压入栈中
//         if(current.left){
//             stack.push(current);
//             current = current.left;
//         }else{
//             //若为空则输出(根节点),并将其指向右节点
//             //若右节点不为空,则重复上面的操作
//             //若右节点为空则出栈,并输出(又一个根节点),并将其指向右节点
//             func(current.value);
//             current = current.right;
//             while(!current && stack.length > 0){
//                 current = stack.pop();
//                 func(current.value);
//                 current = current.right;
//             }
//         }
//     }
// }


//后序遍历
BinarySearchTree.prototype.postOrderTraverse = function(func){
    function postOrderTraverseNode(node, func){
        if(node !== null){
            postOrderTraverseNode(node.left, func);
            postOrderTraverseNode(node.right, func);
            func(node.value);
        }
    }

    postOrderTraverseNode(this.root, func);
}

//后序遍历循环实现
// BinarySearchTree.prototype.postOrderTraverse = function(func){
//     var stack = [],
//         current = null, //指向栈顶节点
//         pre = null;     //指向上一个输出的节点
//     //先将根节点入栈
//     stack.push(this.root);
//     while(stack.length > 0){
//         //current指向栈顶节点
//         current = stack[stack.length - 1]; 
//         //若不存在子节点,或者左右孩子已被输出,则可以输出当前节点(根节点),并出栈  
//         if((current.right === null && current.left === null) || (pre !== null && (pre === current.left || pre === current.right))){
//                 func(current.value);
//                 stack.pop();
//                 pre = current;
//         }else{
//             //若不满足条件则现将右节点压入栈,然后左节点
//             if(current.right){
//                 stack.push(current.right);
//             }
//             if(current.left){
//                 stack.push(current.left);
//             }
//         }
//     }
// }

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(12);
tree.insert(4);
tree.insert(7);
tree.insert(11);
tree.insert(17);
console.log(tree)