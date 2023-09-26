function solution(numbers) {
  // 3, 0, 30 => 3300 : 3이 30보다 앞에 위치해야 함.
  // 3333, 30303030 => 3333이 30303030보다 앞에 위치
  const answer = numbers
      .map(number => number + '')
      .sort((a, b) => b.repeat(4).slice(0, 4) - a.repeat(4).slice(0, 4)) // numbers의 원소는 1000이하 즉, 4자리 이하이기 때문에 4를 곱함. slice는 왜 사용? -> 파이썬과 좀 다르네..
      .join(''); // 리스트의 각 원소를 문자열로 합친다.
  return answer[0] === '0' ? '0' : answer;
}