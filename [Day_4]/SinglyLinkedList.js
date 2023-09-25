class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    // 원하는 위치에 추가
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    // if (node === this.tail) {
    //   this.tail = newNode;
    // }
  }

  remove(value) {
    // 제거
    let prevNode = this.head;
    if (this.size() === 0) {
      console.log('Empty List');
      return;
    } else if (this.size() === 1) {
      if (prevNode.value === value) {
        this.head = null;
        this.tail = null;
      }
    } else {
      while (prevNode.next !== null && prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (prevNode.next !== null) {
        if (prevNode.next.next === null) {
          this.tail = prevNode;
          prevNode.next = null;
        } else {
          prevNode.next = prevNode.next.next;
        }
      } else {
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
const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.tail);
console.log(linkedList.size());
// linkedList.insert(linkedList.find(3), 10);
// linkedList.display(); // 1 2 3 10 4 5
// linkedList.remove(3);
// linkedList.display(); // 1 2 10 4 5
// console.log(linkedList.size()); // 5
