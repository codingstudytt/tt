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

/* slice 연습하기 */
function solution(numbers, direction) {
  if (direction === "right") {
    const last = numbers.slice(-1);
    const rest = numbers.slice(0, -1);
    return [...last, ...rest];
  } else if (direction === "left") {
    const first = numbers.slice(0, 1);
    const rest = numbers.slice(1);
    return [...rest, ...first];
  }
}

/* splice 연습 */
function solution(numbers, direction) {
  if (direction === "right") {
    const last = numbers.splice(-1, 1);
    numbers.unshift(...last);
  } else if (direction === "left") {
    const first = numbers.splice(0, 1);
    numbers.push(...first);
  }
  return numbers;
}
