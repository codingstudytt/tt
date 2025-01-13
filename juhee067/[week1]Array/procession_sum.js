// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
function solution(arr1, arr2) {
  const arr = arr1.length;
  const element = arr1[0].length;
  const result = [];
  for (let i = 0; i < arr; i++) {
    const row = [];
    for (let j = 0; j < element; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(row);
  }
  return result;
}
