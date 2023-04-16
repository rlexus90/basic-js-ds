// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Elem {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}


class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	root() {
		return this.root
	}

	add(data) {
		this.root = addData(this.root, data);

		function addData(elem, data) {
			if (elem) {
				if (elem.data === data) return elem;
				if (elem.data < data) {
					elem.right = addData(elem.right, data);
				} else { elem.left = addData(elem.left, data); }

			} else { return new Elem(data) }
			return elem
		}

	}

	has(data) {
		if (!this.root.data) return false;
		function search(elem, data) {
			if (!elem) return false;
			if (elem.data === data) return true;
			if (elem.data > data) {
				return search(elem.left, data);
			} else { return search(elem.right, data); }
		}
		return search(this.root, data)
	}

	find(data) {

	}

	remove(data) {

	}

	min() {

	}

	max() {

	}

	showTree() {
		showElem(this.root)
		function showElem(elemL, elemR) {
			console.log(elemL ? elemL.data : null, elemR ? elemR.data : null)
			if (elemL) { showElem(elemL.left, elemL.right) }
			if (elemR) { showElem(elemR.left, elemR.right) }
		}




		// 		console.log(`	${this.root.data}
		// ${this.root.left.data}	----- ${this.root.right.data}`)
	}
}

// module.exports = {
//   BinarySearchTree
// };

const tree = new BinarySearchTree();

tree.add(2);
tree.add(1);
tree.add(3);
tree.add(4);
tree.add(5);

tree.showTree()
console.log(tree)

console.log(tree.has(4),tree.has(8))