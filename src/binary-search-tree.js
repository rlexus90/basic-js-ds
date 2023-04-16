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
		this.base = null;
	}
	root() {
		return this.base
	}

	add(data) {
		this.base = addData(this.base, data);

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
		if (!this.base.data) return false;
		function search(elem, data) {
			if (!elem) return false;
			if (elem.data === data) return true;
			if (elem.data > data) {
				return search(elem.left, data);
			} else { return search(elem.right, data); }
		}
		return search(this.base, data)
	}

	find(data) {
		if (!this.base.data) return null;
		function search(elem, data) {
			if (!elem) return null;
			if (elem.data === data) return elem;
			if (elem.data > data) {
				return search(elem.left, data);
			} else { return search(elem.right, data); }
		}
		return search(this.base, data)
	}

	remove(data) {
		this.base = removeElem(this.base, data);

		function removeElem(elem, data) {
			if (!elem) return null;

			if (elem.data < data) {
				elem.right = removeElem(elem.right, data);
				return elem
			} else if (elem.data > data) {
				elem.left = removeElem(elem.left, data);
				return elem
			} else {

				if (!elem.left && !elem.right) return null;

				if (!elem.left) return elem = elem.right;

				if (!elem.right) return elem = elem.left;

				let maxLeft = elem.left;
				while (maxLeft.right) {
					maxLeft = maxLeft.right;
				}
				elem.data = maxLeft.data;
				elem.left = removeElem(elem.left, elem.data);

				return elem
			}
		}
	}

	min() {

	}

	max() {

	}

	showTree() {
		showElem(this.base)
		function showElem(elemL, elemR) {
			console.log(elemL ? elemL.data : null, elemR ? elemR.data : null)
			if (elemL) { showElem(elemL.left, elemL.right) }
			if (elemR) { showElem(elemR.left, elemR.right) }
		}
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
tree.remove(5)
tree.showTree()
console.log(tree)

console.log(tree.has(4), tree.has(8));
console.log(tree.find(3), tree.find(5));
console.log(tree.root().data)
tree.remove(2)
tree.showTree()
console.log(tree)



