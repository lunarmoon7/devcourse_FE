/*
[개미수열]
1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211 ... 

[정규표현식]
(.) : 모든 단어나 수를 캡처한다.
\1* : 한번 이상 반복되는 것들을 찾는다.
g : 전역 검색(전체 문자열을 탐색해서 모든 일치를 반환하도록 한다.)
*/

const seq = ['1']; // 첫 번째 수열은 "1"

// 개미수열 구하기
const setAntSeq = (n) => {
  for (let step = 1; step < n; step++) {
    const regExp = /(.)\1*/g;
    // acc: 콜백의 리턴값 누적
    // cur: 현재 처리할 요소
    // '': 초기값(빈 문자열)
    const nextSeq = seq[step - 1].match(regExp).reduce((acc, cur) => {
      acc + `${cur.length}${cur.slice(0, 1)}`, ''; // cur.length는 문자열의 길이, cur.slice(0, 1)은 문자열의 첫번째 문자
    });
    seq.push(nextSeq);
  }
};

setAntSeq(5); // 5번째 수열까지 구하기