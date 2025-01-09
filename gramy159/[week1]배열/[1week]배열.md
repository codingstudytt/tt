# [배열]

⏩ **푼 문제**
기초
- 배열 자르기
- 배열 원소의 길이
- 베열 회전시키기
- 중복된 숫자 개수
중급
- 제일 작은 수 제거하기

☢️ **풀이과정**
### 배열 자르기
이 문제는 요구한대로 잘라야하므로, .slice() 매서드를 활용했음
매개변수: numbers= 자르려는 배열, num1= 추출구간의 시작 인덱스, num2= 추출구간의 종료 인덱스
핵심
- .slice() 매서드 
  - 전달 인자 2개를 받음
  - 시작 인덱스 num1 부터 종료 인덱스 바로 전(num2+1-1)까지의 배열을 전환함 / 즉, 종료 인덱스는 원소로 포함되지 X
  => 따라서, 자르는 종료구간을 num2+1로 지정하면 명시된 종료구간(num2)까지 추출됨

작성코드
```javascript
function solution(numbers, num1, num2) {
    const result = numbers.slice(num1,(num2+1))
    console.log(result)
    return result;
}
```

### 배열 원소의 길이
이 문제는 문자열의 길이를 계산해주는 .map() 매서드를 활용했음
매개변수: strlist = 문자열 배열
핵심
- .map() 매서드
 : strlist 배열의 문자열 길이 구하기를 수행한 새로운 배열을 반환함
- str => str.length 
 : str은 strlist 배열의 각 요소들을 순회하며 문자열 길이인 length를 계산하여 새로운 배열의 요소로 추가

 작성코드
 ```javascript
 function solution(strlist) {
    return strlist.map(str=>str.length);
}
```

### 배열 회전시키기
이 문제는 회전방향이 2가지인 오른쪽&왼쪽의 경우를 모두 실행하기 위해 매개변수를 하나 정의하고, 맨 앞/뒤 요소 추가/제거 등을 실행할 수 있도록
.pop(), .unshfit(), .shift(), .push() 총 4가지 메서드를 활용했음
매개변수: numbers= 배열(회전시킬 대상), direction= 'right' 혹은 'left' 문자열의 값만 가짐(회전방향)
작성코드
```javascript
function solution(numbers, direction) {  //매개변수 2개 정의
    if(direction=='right'){ //배열을 오른쪽으로 회전시킬 경우
        numbers.unshift(numbers.pop())  //배열의 끝요소(numbers.pop())를 제거하고, 이를 배열의 맨 앞에 추가(numbers.unshift())
        // 결과 : 배열이 오른쪽 한 칸 회전
    } else{ //배열을 왼쪽으로 회전시킬 경우
        numbers.push(numbers.shift()) //배열의 첫번째 요소(numbers.shift())를 제거하고, 이를 배열의 맨 뒤에 추가(numbers.push())
    } // 결과 : 배열이 왼쪽 한 칸 회전
    return numbers; //회전된 배열 반환
}
```

### 중복된 숫자 개수
이 문제는 같은 숫자의 개수를 세야하므로, 중복되는 숫자와 그 개수를 저장할 매개변수 2개를 정의하고, for문을 사용하여 문제의 배열을 순회하면서 if문을 사용해 중복숫자의 개수를 셀 수 있게 작성했음 / 따로 활용할 메서드가 없어보였음
매개변수: array = 정수 배열, n = 중복되는 특정 숫자 
작성코드
```javascript
function solution(array, n){
    let answer = 0; //answer는 n과 동일한 값의 개수를 저장할 변수로, 초기값은 0으로 설정
    for (i =0; i < array.length; i++){ //array의 첫~끝요소까지 순회, i=0부터 시작해 배열의 길이(array.length)보다 작을때까지 반복
        if(array[i] == n){ // 현재 요소 array[i]가 숫자 n과 같으면 
            answer++; // answer 값을 1증가(answer++)
        }
    }
    return answer; // n과 같은 숫자가 중복된 개수 저장한 answer 값 반환
} 
```

### 제일 작은 수 제거하기
이 문제는 배열에서 가장 작은 값을 찾아 제거하고 새로운 배열을 반환해야함
매개변수: arr = 배열
핵심
- ... 스프레드 연산자를 사용해 배열을 펼치고, 각 요소를 Math.min()에 전달
- Math.min() 메서드
  : 숫자 중 최소값 반환
- filter() 메서드
  : 주어진 조건을 만족하는 요소만 모아 새로운 배열 반환
작성코드 
```javascript
function solution(arr) {
    const min = Math.min(...arr); // 배열에서 최소값을 구함

    if (arr.length === 1) { // 배열의 길이가 1이라면
            return [-1]; // [-1]을 반환 => (예외 사항)
    }
    return arr.filter(n => n !== min) // 최소값을 제외한 요소만 남겨 새로운 배열 반환

}
```

코딩테스트를 처음으로 본격적으로 풀다보니, 기초에서부터 시간이 꽤나 오래걸렸습니다.. 코드를 알고보면 쉬운 문제들도 있었고, 아직 모르는 매서드가 많아 문제에서 요구한 니즈에 맞는 매서드를 찾는데도 시간이 소요됐던 것 같아요.
원래 목표는 기초2,초급2,중급1 였으나, 제 현상태를 자각하고 천천히 실력을 늘릴 계획입니다. 많은 리뷰 남겨주십쇼 저번주 긴 일정으로 차질이 생겨 늦게 제출해 죄송합니다. 다음주부터 제때 올리겠습니다!
