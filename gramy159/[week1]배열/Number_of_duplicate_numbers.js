function solution(array, n){
    let answer = 0; //answer는 n과 동일한 값의 개수를 저장할 변수로, 초기값은 0으로 설정
    for (i =0; i < array.length; i++){ //array의 첫~끝요소까지 순회, i=0부터 시작해 배열의 길이(array.length)보다 작을때까지 반복
        if(array[i] == n){ // 현재 요소 array[i]가 숫자 n과 같으면 
            answer++; // answer 값을 1증가(answer++)
        }
    }
    return answer; // n과 같은 숫자가 중복된 개수 저장한 answer 값 반환
} 