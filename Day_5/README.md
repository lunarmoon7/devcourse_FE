## 큐 (Linear Queue)
- First In First Out
- Linear Queue, Circular Queue
- 맨 앞 : `Front`, 맨 뒤 : `Rear`
- 넣기 : `enqueue`, 빼기 : `dequeue`
### 표현방법
- Array로 표현 → 원소를 뺄 때 앞당기는 연산 때문에 번잡해짐
- LinkedList로 표현 → 인덱스를 신경쓰지 않아도 됨
#### with Array
```js
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
```
#### with LinkedList
```js
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	enqueue(newValue) {
		const newNode = new Node(newValue);
		if (this.head === null) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size += 1;
	}
	dequeue() {
		const value = this.head.value;
		this.head = this.head.next;
		this.size -= 1;
		return value;
	}
	peek() {
		return this.head.value;
	}
}
```

> **shift 함수는 사용하지 말 것!**
> → shift에는 선형시간(`O(n)`)이 소요되기 때문에 큐에서 기대하는 로직이 수행되지 않는다. 
> 
> **코딩테스트**에서는 일반적으로 **배열로 큐를 구현**해서 사용하는 것이 좋다.


### Circular Queue
- Front와 Rear가 이어져있는 Queue
- LinkedList로 구현했을 시 이점이 없다.

#### with Array
```js
class Queue {
	constructor(maxSize) {
		this.maxSize = maxSize;
		this.queue = [];
		this.front = 0;
		this.rear = 0;
		this.size = 0;
	}
	enqueue(value) {
		if(this.isFull()) {
			console.log("Queue is Full");
			return;
		}
		this.queue[this.rear] = value;
		this.rear = (this.rear + 1) % this.maxSize;
		this.size += 1;
	}
	dequeue() {
		const value = this.queue[this.front];
		delete this.queue[this.front];
		this.front = (this.front + 1) % this.maxSize;
		this.size -= 1;
		return value;
	}
	isFull() {
		return this.size === this.maxSize;
	}
	peek() {
		return this.queue[this.front];
	}
}
```
***
## 해시 테이블
- 키와 값을 받아 키를 해싱하여 나온 index에 값을 저장하는 선형 자료구조
- 삽입은 O(1)이며 키를 알고 있다면 삭제, 탐색도 O(1) 소요
### 해시 함수
입력받은 값을 특정 범위 내 숫자로 변경하는 함수

### 해시 충돌
해결방법
- 선형 탐사법 : 충돌이 발생하면 옆으로 한 칸 이동한다.
- 제곱 탐사법 : 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.
- 이중 해싱 : 충돌이 발생하면 다른 해시 함수를 이용하여 새로운 인덱스를 만들어 이동시킨다.
- 분리 연결법 : 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.
> 해시 테이블을 사용하면 O(1)에 찾을 수 있다. 따라서 빠르게 값을 찾아야하는 경우 해시 테이블을 사용하는 것이 좋다.

> `JavaScript Object = Hash Table`
> 또는, `Map, Set, Array`을 사용할 수 있다.
***
## 그래프
- 정점과 정점 사이를 연결하는 간선으로 이루어진 비선형 자료구조
- 정점(`node`) 집합과 간선(`edge`) 집합으로 표현할 수 있다.
### 특징
- 정점은 여러 개의 간선을 가질 수 있다.
- 방향 그래프와 무방향 그래프로 나눌 수 있다.
- 간선은 가중치를 가질 수 있다.
- 사이클이 발생할 수 있다.
### 무방향 그래프
- 간선으로 이어진 정점끼리는 양방향으로 이동이 가능.
- (A, B)와 (B, A)는 같은 간선으로 취급된다.
### 방향 그래프
- 간선에 방향성이 존재하는 그래프
- 양방향으로 갈 수 있더라도 <A, B>와 <B, A>는 다른 간선으로 취급된다.
### 연결 그래프
- 모든 정점이 서로 이동 가능한 상태인 그래프
### 비연결 그래프
- 특정 정점 쌍 사이에 간선이 존재하지 않는 그래프
### 완전 그래프
- 모든 정점끼리 연결된 상태인 그래프
### 사이클
- 그래프의 정점과 간선의 부분 집합에서 순환이 되는 부분

### 어떻게 구현?
- `인접 행렬` → `in 2차원 배열`
- `인접 리스트` → `in 연결 리스트`

#### 인접 행렬
```js
const graph = Array.from(
	Array(5),
	() => Array(5).fill(false)
);

graph[0][1] = true;
graph[0][3] = true;
...
```

#### 인접 리스트
```js
const graph = Array.from(
	Array(5),
	() => []
);

graph[0].push(1);
graph[0].push(3);
...
```