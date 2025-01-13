function solution(arr) {
  const answer = [];
  const minNum = Math.min(...arr);

  for (const e of arr) {
    if (e === minNum) continue;
    answer.push(e);
  }
  return answer.length ? answer : [-1];
}
