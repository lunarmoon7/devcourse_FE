## 자료구조
메모리를 효율적으로 사용하며 빠르고 안정적으로 데이터를 처리하는 것이 궁극적인 목표로 상황에 따라 유용하게 사용될 수 있도록 특정 구조를 이루고 있다.
- `Stack`
- `Queue`
- `Graph`
- `Tree`
> 자료구조는 단순 구조, 선형 구조, 비선형 구조로 나눌 수 있다.
### 선형구조
- 한 원소 뒤에 하나의 원소만이 존재하는 형태
- 즉, 자료들이 선형으로 나열되어 있는 구조를 의미
> Array, Linked List, Stack, Queue
### 비선형구조
- 원소 간 다대다 관계를 가지는 형태
- 계층적 구조나 망형 구조를 표현하기에 적절하다.
> Graph, Tree
### 단순구조
> 정수, 실수, 문자열, 논리
***
## 시간 복잡도
- `Big-O Notation`을 사용한다.
![Big O notation : Understanding different time complexities | by Praveen  David Mathew | Medium](https://miro.medium.com/v2/resize:fit:678/0*ouBkTMgA_yg_Etfz.png)
> $$O(1) < O(log n) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)$$
> **오른쪽으로 갈 수록 느려진다.(로그의 밑은 2)**

#### O(n)
```js
for (let i = 0; i < n; i+= 1) { ...}
```
#### O(logn)
```js
for (let i = 1; i <= n; i *= 2) { ... }
```
#### O(nlogn)
```js
for (let i = 1; i <= n; i += 1) {
	for (let j = 1; j <= n; j *= 2) { ... }
}
```
#### O(n^2)
```js
for (let i = 0; i < n; i += 1) {
	for (let j = 0; j < n; j += 1) { ... }
}
```

> 코딩 테스트에서는 시간복잡도가 최대 **O(n^3)**을 넘지 않아야 한다.
### 규칙
1. 상수항은 무시
2. 가장 큰 항 외엔 무시 : O(n + n^2) → O(n^2)
***
## 배열, 순차리스트 (Array)
- 연관된 데이터를 연속적인 형태로 구성된 구조를 가진다.
- 배열에 포함된 원소는 순서대로 `index`를 가진다.
### 특징
- 고정된 크기를 가지며 일반적으론 동적으로 크기를 늘릴 수 없다.
	- JS처럼 대부분의 스크립트 언어는 동적으로 크기를 증감할 수 있다.
- 원하는 원소의 index를 알고 있다면 O(1)에 원소 탐색이 가능하다.
- 원소를 삭제하면 해당 index에 빈자리가 생긴다.

> 삭제와 추가 자체는 `O(1)`이 소요된다. 하지만, 연속적인 형태라는 특징 때문에 기존의 원소들을 앞으로 땡기거나 뒤로 밀어야 하기 때문에 실질적인 시간복잡도는 `O(n)`이다.
> 따라서, 추가와 삭제가 반복되는 로직이면 배열이 권장되지 않는다. (탐색이 주 목적이라면 유리하다.)
***
## 연결리스트 (Linked List)
- 각 요소를 포인터로 연결하여 관리하는 선형 자료구조
- 각 요소는 노드라고 부르며 데이터 영역과 포인터 영역으로 구성된다.
### 특징
- 메모리가 허용하는 한 요소를 제한없이 추가 가능
- 탐색에 O(n) 소요 (포인터를 타고타고 찾아가야 하기 때문에)
- 추가, 제거에 O(1) 소요 (포인터를 제거하고 이어 붙이면 되기 때문에)
- Singly, Doubly, Circular가 존재
### Singly Linked List (단일 연결 리스트)
Head에서 Tail까지 단방향으로 이어지는 연결 리스트
> 추가를 위한 탐색을 수행하지 않도록 주의해야 한다. 그렇지 않으면 추가에 O(n)이 소요된다.
> 노드가 하나만 있다면, 이 노드가 `head`와 `tail` 모두를 수행한다.
### Doubly Linked List(이중 연결 리스트)
- 양방향으로 이어지는 연결리스트
- 포인터가 2개 존재한다.(`다음 노드 포인터, 이전 노드 포인터`)
## Circular Linked List(원형 연결 리스트)
- Tail과 Head가 연결된 연결 리스트
- 원형 큐를 만들때도 사용된다.
## 스택
- Last In First Out
- 맨 위의 요소는 top이라고 지칭
- push, pop 연산이 존재
***
