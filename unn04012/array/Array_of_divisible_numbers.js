function solution(arr, divisor) {
  const answer = [];

  for (const e of arr) {
    if (e % divisor === 0) answer.push(e);
  }
  if (answer.length === 0) answer.push(-1);

  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
