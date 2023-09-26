class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    // 찾기
    let currNode = this.head;
    let _size = 0;

    if (this.size() === 0) {
      console.log('Empty List');
      return null;
    }

    while (currNode && currNode.value !== value) {
      if (_size > this.size()) {
        console.log('No Such Node');
        return null;
      }
      _size++;
      currNode = currNode.next;
    }

    if (!currNode) {
      console.log('Empty List');
      return null;
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
      newNode.next = this.head;
    } else {
      // 빈 리스트가 아닐 경우
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    // 원하는 위치에 추가
    if (this.find(node)) {
      const newNode = new Node(newValue);
      newNode.next = node.next;
      node.next = newNode;
      if (node === this.tail) {
        // 꼬리일 경우
        newNode.next = this.head;
        this.tail = newNode;
      }
    } else {
      // 찾는 노드가 없을 경우
      console.log('No Such Node');
      return null;
    }
  }

  // remove(value) {
  //   // 제거
  //   if (this.size() === 0) {
  //     // 빈 리스트일 경우
  //     console.log('Empty List');
  //     return null;
  //   }
  //   if (this.size() === 1) {
  //     // 노드가 하나일 경우
  //     if (this.head.value === value) {
  //       this.head = null;
  //       this.tail = null;
  //     } else {
  //       console.log('No Such Node');
  //     }
  //     return null;
  //   }

  //   let currNode = this.head;
  //   let _size = 0;

  //   while (currNode.next.value !== value) {
  //     if (_size > this.size()) {
  //       console.log('No Such Node');
  //       return null;
  //     }
  //     _size++;
  //     currNode = currNode.next;
  //   }
  //   // 여기까지 왔다면, 무조건 value를 갖는 노드가 있다는 뜻
  //   if (currNode.next.next === this.head) { // 노드가 단 2개일 경우
  //     this.head = currNode;
  //     this.tail = currNode;
  //   } else {
  //     currNode.next = currNode.next.next;
  //   }
  // }

  remove(value) {
    // 제거
    if (this.size() === 0) {
      // 빈 리스트일 경우
      console.log('Empty List');
      return null;
    }

    let currNode = this.head;
    let _size = 0;

    while (currNode.next.value !== value) {
      if (_size > this.size()) {
        console.log('No Such Node');
        return null;
      }
      _size++;
      currNode = currNode.next;
    }
    // 여기까지 왔다면, 무조건 value를 갖는 노드가 있다는 뜻
    // curNode.next가 제거할 노드를 의미한다.
    if (currNode.next === this.head) { // 노드가 하나일 경우
      this.head = null;
      this.tail = null;
    } else {
      if (currNode.next.next === this.head) { // 노드가 두 개일 경우
        this.head = currNode;
        this.tail = currNode;
      } else {
        if (currNode.next == this.tail) {
          currNode.next = this.head;
          this.tail = currNode;
        } else {
          currNode.next = currNode.next.next;
        }
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
      if (currNode === this.head) break;
    }
    return ret;
  }

  size() {
    // 크기
    let currNode = this.head;
    let _size = 0;
    while (currNode) {
      ++_size;
      if (currNode.next == this.head) break;
      currNode = currNode.next;
    }

    return _size;
  }
}

// For Test
const linkedList = new CircularLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.remove(3);
console.log(linkedList);
