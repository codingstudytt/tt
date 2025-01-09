function solution(numbers, num1, num2) {
    const result = numbers.slice(num1,(num2+1))
    console.log(result)
    return result;
}