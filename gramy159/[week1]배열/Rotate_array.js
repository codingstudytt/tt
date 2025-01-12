function solution(numbers, direction) {  //매개변수 2개 정의
    if(direction=='right'){ //배열을 오른쪽으로 회전시킬 경우
        numbers.unshift(numbers.pop())  //배열의 끝요소(numbers.pop())를 제거하고, 이를 배열의 맨 앞에 추가(numbers.unshift())
        // 결과 : 배열이 오른쪽 한 칸 회전
    } else{ //배열을 왼쪽으로 회전시킬 경우
        numbers.push(numbers.shift()) //배열의 첫번째 요소(numbers.shift())를 제거하고, 이를 배열의 맨 뒤에 추가(numbers.push())
    } // 결과 : 배열이 왼쪽 한 칸 회전
    return numbers; //회전된 배열 반환
}