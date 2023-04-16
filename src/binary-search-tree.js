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
		console.log(`${this.root.data}
		${this.root.left}	----- ${this.root.right}`)
	}
}

// module.exports = {
//   BinarySearchTree
// };

const tree = new BinarySearchTree();

tree.add(2);
tree.add(1);
tree.add(3);

tree.showTree()