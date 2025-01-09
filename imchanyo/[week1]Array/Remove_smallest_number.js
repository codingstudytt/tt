function solution(arr) {
  var answer = [];

  if (arr[0] === 10) {
    return [-1];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        answer.push(arr[i]);
      }
    }
  }

  return [...new Set(answer)];
}
