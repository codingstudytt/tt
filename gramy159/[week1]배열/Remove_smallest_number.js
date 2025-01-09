function solution(arr) {
    const min = Math.min(...arr); // 배열에서 최소값을 구함

    if (arr.length === 1) { // 배열의 길이가 1이라면
            return [-1]; // [-1]을 반환 => (예외 사항)
    }
    return arr.filter(n => n !== min) // 최소값을 제외한 요소만 남겨 새로운 배열 반환

}