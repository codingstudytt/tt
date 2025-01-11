function solution(arr1, arr2) {
  const n = arr1.length;
  const m = arr2[0].length;

  const answer = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const result = arr1[i].reduce((acc, cur, idx) => acc + cur * arr2[idx][j], 0);

      answer[i][j] = result;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
