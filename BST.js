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

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(12);
tree.insert(4);
tree.insert(7);
tree.insert(11);
tree.insert(17);
console.log(tree)