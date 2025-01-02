function solution(array, n) {
  var answer = [];

  array.forEach((num) => {
    if (num === n) {
      answer.push(num);
    }
  });

  return answer.length;
}
