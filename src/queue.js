const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * 
 */
class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	getUnderlyingList() {
		return this.first
	}

	enqueue(value) {
		if (!this.first) {
			this.first = new ListNode(value);
			this.last = this.first;
		} else {

			this.last.next = new ListNode(value);
			this.last = this.last.next;
		}
	}

	dequeue() {
		if (!this.first) return null;
		const value = this.first.value;
		this.first = this.first.next
		return value
	}
}

// const queue = new Queue();

// queue.enqueue(1); // adds the element to the queue
// queue.enqueue(3);
// console.log(queue.getUnderlyingList()) // adds the element to the queue
// console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }



module.exports = {
	Queue
};
