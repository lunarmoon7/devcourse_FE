class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currNode = this.root;

    for (const ch of string) {
      if (!currNode.children.has(ch)) {
        currNode.children.set(ch, new Node(currNode.value + ch));
      }

      currNode = currNode.children.get(ch);
    }
    currNode.isEndOfWord = true;
  }

  has(string) {
    let currNode = this.root;

    for (const ch of string) {
      if (!currNode.children.get(ch)) return false;

      currNode = currNode.children.get(ch);
    }

    return true;
  }

  autoComplete(string) {
    let currNode = this.root;

    // 입력된 문자열까지 탐색
    for (const ch of string) {
      if (!currNode.children.get(ch)) {
        return '자동완성에 맞는 단어가 없습니다.';
      }
      currNode = currNode.children.get(ch);
    }

    // BFS를 이용한 레벨 순회
    const queue = [currNode];
    const result = [];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.isEndOfWord) {
        result.push(node.value);
      }

      for (const child of node.children.values()) {
        queue.push(child);
      }
    }

    return result;
  }
}

const trie = new Trie();
trie.insert('string');
trie.insert('str')
trie.insert('stress')
trie.insert('star')
trie.insert('singer')
trie.insert('sign')
trie.insert('starbucks')
trie.insert('starcraft')
trie.insert('south')
trie.insert('southafrica')
trie.insert('southkorea')
trie.insert('south korea')
trie.insert('south india')

console.log(trie.autoComplete('soo'));
console.log(trie.autoComplete('st'));
console.log(trie.autoComplete('star'));
console.log(trie.autoComplete('south'));