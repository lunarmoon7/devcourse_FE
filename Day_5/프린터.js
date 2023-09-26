class Queue {
	constructor() {
		this.queue = [];
		this.front = 0;
		this.rear = 0;
	}
	enqueue (value) {
		this.queue[this.rear++] = value;
	}
	dequeue() {
		const value = this.queue[this.front];
		delete this.queue[this.front];
		this.front += 1;
		return value;
	}
	peek() {
		return this.queue[this.front];
	}
	size() {
		return this.rear - this.front;
	}
}
function solution(priorities, location) {
    let order = 0;
    const q = new Queue();
    
    priorities.map((p, idx) => q.enqueue([p, idx]));
    priorities.sort((a, b) => b - a);
    
    while (q.size() > 0) {
        const p = q.peek()[0];
        const idx = q.peek()[1];
        
        if (p >= priorities[order]) {
            q.dequeue();
            order++;
            if (idx === location) {
                break;
            }
        } else {
            q.enqueue(q.dequeue());
        }
    }
    
    return order;
}