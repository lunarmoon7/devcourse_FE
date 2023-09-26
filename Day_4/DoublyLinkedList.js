class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    // 찾기
    let currNode = this.head;

    while (currNode && currNode.value !== value) {
      currNode = currNode.next;
    }

    if (!currNode) {
      console.log('No Such Node');
      return;
    }

    return currNode;
  }

  append(newValue) {
    // 맨 뒤에 추가
    const newNode = new Node(newValue);

    if (!this.head) {
      // 빈 리스트일 경우
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 빈 리스트가 아닐 경우
      if (this.size() === 1) {
        // 노드가 하나일 경우(헤드만 존재)
        this.head.next = newNode;
        newNode.prev = this.head;
        this.tail = newNode;
      } else {
        // 노드가 두 개 이상일 경우
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }

  insert(node, newValue) {
    // 원하는 위치에 추가
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next.prev = newNode;
    node.next = newNode;
    newNode.prev = node;
    if (node === this.tail) {
      this.tail = newNode;
    }
  }

  remove(value) {
    // 제거
    let prevNode = this.head;
    if (this.size() === 0) {
      // 빈 리스트일 경우
      console.log('Empty List');
      return;
    } else if (this.size() === 1) {
      // 노드가 하나일 경우(head만 존재)
      if (prevNode.value === value) {
        this.head = null;
        this.tail = null;
      }
    } else {
      // 노드가 두 개 이상일 경우
      while (prevNode.next !== null && prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (prevNode.next !== null) {
        if (prevNode.next.next === null) {
          // 제거하려는 노드가 tail일 경우
          this.tail = prevNode;
          prevNode.next = null;
        } else {
          prevNode.next.next.prev = prevNode;
          prevNode.next = prevNode.next.next;
        }
      } else {
        // 제거하려는 노드가 없을 경우
        console.log('No Such Node');
        return;
      }
    }
  }

  display() {
    // 출력
    let currNode = this.head;
    let ret = '';
    while (currNode) {
      ret += currNode.value + ' ';
      currNode = currNode.next;
    }
    console.log(ret);
  }

  size() {
    // 크기
    let currNode = this.head;
    let _size = 0;
    while (currNode) {
      currNode = currNode.next;
      _size++;
    }

    return _size;
  }
}

// For Test
const linkedList = new DoublyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.remove(2);
console.log(linkedList.tail);
console.log(linkedList.size());