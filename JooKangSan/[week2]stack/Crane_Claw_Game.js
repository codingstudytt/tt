function solution(board, moves) {
  let answer = 0;
  let stack = [];
  
  for(let move of moves) {
      // moves 배열의 값을 인덱스로 사용하기 위해 1을 빼줍니다
      let col = move - 1;
      
      // 해당 열에서 가장 위에 있는 인형을 찾습니다
      for(let row = 0; row < board.length; row++) {
          if(board[row][col] !== 0) {
              let doll = board[row][col];
              
              // 인형을 집었으니 해당 위치를 0으로 변경
              board[row][col] = 0;
              
              // 스택의 최상단 인형과 같다면 두 인형을 터뜨립니다
              if(stack[stack.length - 1] === doll) {
                  stack.pop();
                  answer += 2;
              } else {
                  stack.push(doll);
              }
              break;
          }
      }
  }
  
  return answer;
}