function solution(numbers, direction) {
  var answer = [...numbers];

  if (direction === "right") {
    const rightNumbers = answer.pop();
    answer.unshift(rightNumbers);
  } else if (direction === "left") {
    const leftNumbers = answer.shift();
    answer.push(leftNumbers);
  }

  return answer;
}
