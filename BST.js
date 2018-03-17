//二叉搜索树左子树的所有节点值均小于根节点的值,右子树的所有节点值均大于根节点的值

/**
 * 节点定义
 * @param {*} value 节点值
 */
function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(value){
	this.root = new Node(value);
} 

BinarySearchTree.prototype = {
	constructor: BinarySearchTree,

	/**
	 * 插入节点
	 * @param {*} value 节点值
	 */
	insert: function(value){
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
	
		_insertNode(this.root, newNode);
	},

	/**
	 * 查找最小值
	 */
	minNode: function(){
		let node = this.root;
		while(node.left){
			node = node.left;
		}
		return node.value
	},

	/**
	 * 查找最大值
	 */
	maxNode: function(){
		let node = this.root;
		while(node.right){
			node = node.right;
		}
		return node.value
	},

	/**
	 * 查找指定元素
	 * @param {Node} node 开始查找的节点
	 * @param {*} value 查找的节点值
	 */
	search: function(node, value){
		if(node === null){
			return null
		}
		if(value < node.value){
			return this.search(node.left, value)
		}else if(value > node.value){
			return this.search(node.right, value)
		}else{
			return node
		}
	},

	/**
	 * 删除节点
	 * @param {Node} node 开始查找的节点
	 * @param {*} value 删除节点的值
	 */
	remove: function(node, value){
		if(node === null){
			return null
		}
		if(value < node.value){
			node.left = this.remove(node.left, value);
			return node
		}else if(value > node.value){
			node.right = this.remove(node.right, value);
			return node
		}else{
			//删除节点没有子节点
			if(node.left === null && node.right === null){
				node = null;
				return node
			}
			//删除节点有一个子节点
			if(node.left === null){
				node = node.right;
				return node;
			}
			if(node.right === null){
				node = node.left;
				return node;
			}
			//删除节点有两个子节点, 此时删除后父节点应指向左子树的最大子节点或右子树的最小子节点
			let minNode = node.right;
			while(minNode.left){
				minNode = minNode.left;
			}
			node.value = minNode.value;
			node.right = this.remove(node.right, minNode.value);
			return node
		}
	},

	/**
	 * 先序遍历
	 */
	preOrderTraverse: function(func){
		function preOrderTraverseNode(node, func){
			if(node !== null){
				func(node.value);
				preOrderTraverseNode(node.left, func);
				preOrderTraverseNode(node.right, func);
			}
		}
	
		preOrderTraverseNode(this.root, func);
	},

	/**	
	 * 中序遍历
	 */
	inOrderTraverse: function(func){
		function inOrderTraverseNode(node, func){
			if(node !== null){
				inOrderTraverseNode(node.left, func);
				func(node.value);
				inOrderTraverseNode(node.right, func);
			}
		}
	
		inOrderTraverseNode(this.root, func);
	},

	/**	
	 * 后序遍历
	 */
	postOrderTraverse: function(func){
		function postOrderTraverseNode(node, func){
			if(node !== null){
				postOrderTraverseNode(node.left, func);
				postOrderTraverseNode(node.right, func);
				func(node.value);
			}
		}
	
		postOrderTraverseNode(this.root, func);
	},

	/**	
	 * 层次遍历
	 */
	levelOrderTraverse: function(func){
		var root = this.root;
		if(root === null){
			return null
		}
		var queue = [];
		queue.push(root);
	
		while(queue.length > 0){
			var node = queue.shift();
			func(node.value);
	
			if(node.left){
				queue.push(node.left);
			}
			if(node.right){
				queue.push(node.right);
			}
		}	
	}
}

//先序遍历循环实现
// preOrderTraverse: function(func){
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

//中序遍历循环实现
// inOrderTraverse: function(func){
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

//后序遍历循环实现
//postOrderTraverse: function(func){
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

