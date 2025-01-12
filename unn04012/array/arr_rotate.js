function solution(numbers, direction) {
  const answer = [];

  if (direction === 'right') {
    for (let i = 0; i < numbers.length - 1; i++) {
      answer[i + 1] = numbers[i];
    }
    answer[0] = numbers[numbers.length - 1];
  } else {
    for (let i = numbers.length - 1; i >= 1; i--) {
      answer[i - 1] = numbers[i];
    }
    answer[numbers.length - 1] = numbers[0];
  }

  return answer;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
