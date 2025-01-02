# 배열 알고리즘 상세 가이드

## 1. 검색 알고리즘

### 1.1 선형 검색 (Linear Search)
선형 검색은 가장 단순하고 직관적인 검색 방법입니다. 배열의 처음부터 끝까지 순차적으로 검색하여 원하는 값을 찾습니다.

**작동 원리**:
1. 배열의 첫 번째 요소부터 시작
2. 각 요소를 순차적으로 확인
3. 찾고자 하는 값과 일치하면 해당 인덱스 반환
4. 끝까지 찾지 못하면 -1 반환

**장점**:
- 구현이 매우 간단
- 정렬되지 않은 배열에서도 사용 가능
- 작은 배열에서 효율적
- 추가 메모리가 필요 없음

**단점**:
- 배열 크기가 커질수록 검색 시간이 선형적으로 증가
- 대용량 데이터에서는 비효율적

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

### 1.2 이진 검색 (Binary Search)
이진 검색은 정렬된 배열에서 사용하는 매우 효율적인 검색 알고리즘입니다. 검색 범위를 절반씩 줄여가며 찾는 방식입니다.

**작동 원리**:
1. 배열의 중간 요소를 선택
2. 중간 요소와 찾는 값을 비교
3. 찾는 값이 더 작으면 왼쪽 절반을 검색
4. 찾는 값이 더 크면 오른쪽 절반을 검색
5. 찾을 때까지 1-4 반복

**장점**:
- 매우 효율적인 검색 속도 (로그 시간 복잡도)
- 대규모 데이터셋에서 특히 효과적
- 메모리 사용이 적음

**단점**:
- 정렬된 배열에서만 사용 가능
- 동적으로 변하는 데이터에는 부적합
- 정렬 비용이 추가될 수 있음

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

## 2. 정렬 알고리즘

### 2.1 버블 정렬 (Bubble Sort)
버블 정렬은 인접한 두 요소를 반복적으로 비교하고 교환하는 간단한 정렬 알고리즘입니다.

**작동 원리**:
1. 인접한 두 요소를 비교
2. 순서가 잘못되어 있으면 교환
3. 배열 끝까지 반복
4. 정렬이 완료될 때까지 1-3 반복

**최적화 기법**:
- 이미 정렬된 경우 조기 종료
- 각 패스마다 마지막 요소는 확정되므로 비교 범위 감소

**장점**:
- 구현이 매우 단순
- 안정 정렬
- 추가 메모리가 필요 없음
- 이미 정렬된 데이터에 대해 최적화 가능

**단점**:
- 매우 느린 시간 복잡도
- 큰 데이터셋에서 비효율적
- 많은 교환 연산 필요

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // 최적화: 이미 정렬된 마지막 부분 제외
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // 최적화: 교환이 없으면 이미 정렬된 상태
        if (!swapped) break;
    }
    
    return arr;
}
```

### 2.2 선택 정렬 (Selection Sort)
선택 정렬은 각 패스마다 최소값을 찾아 적절한 위치로 이동시키는 정렬 알고리즘입니다.

**작동 원리**:
1. 정렬되지 않은 부분에서 최소값 찾기
2. 최소값을 현재 위치로 이동
3. 정렬된 부분을 한 칸 늘리기
4. 배열이 정렬될 때까지 1-3 반복

**특징**:
- 데이터 교환 횟수가 버블 정렬보다 적음
- 각 패스마다 최소값이 확정됨
- 정렬 상태와 무관하게 일정한 시간 소요

**장점**:
- 구현이 간단
- 교환 횟수가 적음
- 메모리 사용이 적음

**단점**:
- 느린 시간 복잡도
- 불안정 정렬
- 큰 데이터셋에서 비효율적

```javascript
function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        
        // 최소값 찾기
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // 최소값이 현재 위치가 아니면 교환
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    
    return arr;
}
```

### 2.3 삽입 정렬 (Insertion Sort)
삽입 정렬은 각 요소를 이미 정렬된 부분의 적절한 위치에 삽입하는 정렬 알고리즘입니다.

**작동 원리**:
1. 두 번째 요소부터 시작
2. 현재 요소를 정렬된 부분의 적절한 위치에 삽입
3. 배열 끝까지 1-2 반복
4. 삽입 시 정렬된 부분의 큰 요소들을 오른쪽으로 이동

**최적화 기법**:
- 이진 검색을 사용하여 삽입 위치 찾기
- 필요한 경우에만 이동 수행

**장점**:
- 안정 정렬
- 작은 데이터셋에서 효율적
- 거의 정렬된 데이터에서 매우 효율적
- 온라인 알고리즘 (실시간 정렬 가능)

**단점**:
- 큰 데이터셋에서 비효율적
- 많은 이동 연산 필요
- 최악의 경우 느린 성능

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        
        // 적절한 삽입 위치를 찾아 요소들을 이동
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // 찾은 위치에 삽입
        arr[j + 1] = key;
    }
    
    return arr;
}
```

### 2.4 퀵 정렬 (Quick Sort)
퀵 정렬은 분할 정복 방식을 사용하는 매우 효율적인 정렬 알고리즘입니다.

**작동 원리**:
1. 피벗 선택 (일반적으로 중간 요소)
2. 피벗보다 작은 요소는 왼쪽으로, 큰 요소는 오른쪽으로 분할
3. 분할된 부분 배열에 대해 재귀적으로 1-2 반복
4. 부분 배열의 크기가 1 이하가 될 때까지 반복

**최적화 기법**:
- 좋은 피벗 선택 (중간값 또는 랜덤)
- 작은 부분 배열에 대해 삽입 정렬 사용
- 3-way 파티셔닝으로 중복 요소 처리

**장점**:
- 평균적으로 매우 빠른 속도
- 추가 메모리 사용이 적음
- 캐시 효율성이 좋음

**단점**:
- 최악의 경우 성능 저하
- 불안정 정렬
- 이미 정렬된 데이터에서 비효율적

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const middle = [];
    const right = [];

    // 분할
    for (const element of arr) {
        if (element < pivot) left.push(element);
        else if (element > pivot) right.push(element);
        else middle.push(element);
    }

    // 정복 및 결합
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

## 3. 기타 주요 알고리즘

### 3.1 배열 회전 (Array Rotation)
배열 회전은 배열의 요소들을 특정 위치만큼 이동시키는 알고리즘입니다.

**구현 방법**:
1. 임시 배열 사용
2. 요소 하나씩 이동
3. 역전(Reversal) 알고리즘

**최적화 기법**:
- GCD를 이용한 저글링 알고리즘
- 블록 스왑 알고리즘
- 효율적인 메모리 사용을 위한 제자리 회전

**장점**:
- 다양한 구현 방법 존재
- 특정 상황에 맞는 최적화 가능
- 실제 응용 사례가 많음

```javascript
// 기본적인 회전 구현
function rotateArray(arr, k) {
    k = k % arr.length; // k가 배열 길이보다 큰 경우 처리
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// 효율적인 제자리 회전
function rotateArrayInPlace(arr, k) {
    k = k % arr.length;
    
    // 전체 배열 뒤집기
    reverse(arr, 0, arr.length - 1);
    // 처음 k개 요소 뒤집기
    reverse(arr, 0, k - 1);
    // 나머지 요소 뒤집기
    reverse(arr, k, arr.length - 1);
    
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
```

### 3.2 최대 부분합 (Kadane's Algorithm)
연속된 부분 배열의 최대 합을 찾는 효율적인 알고리즘입니다.

**작동 원리**:
1. 현재까지의 최대 합과 전체 최대 합을 추적
2. 각 위치에서 새로운 요소를 포함할지 새로 시작할지 결정
3. 전체 최대 합 갱신

**응용 분야**:
- 주식 거래 최적 기간 찾기
- 신호 처리
- 패턴 인식

**장점**:
- 선형 시간 복잡도
- 추가 메모리가 필요 없음
- 실시간 처리 가능

```javascript
function maxSubArray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
    
    for (let i = 1; i < arr.length; i++) {
        // 현재 요소부터 새로 시작할지 기존 합에 더할지 결정
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum = currentSum + arr[i];
        }
        
        // 최대 합 갱신
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    
    return {
        maxSum,
        subArray: arr.slice(start, end + 1),
        start,
        end
    };
}
```

### 3.3 두 수의 합 찾기 (Two Sum)
배열에서 특정 합이 되는 두 수를 찾는 알고리즘입니다.

**구현 방법**:
1. 브루트 포스 방식 (이중 루프)
2. 해시맵을 이용한 방식
3. 정렬 후 투 포인터 방식

**최적화 기법**:
- 정렬된 배열에서는 투 포인터 사용
- 해시맵으로 조회 시간 최적화
- 조기 종료 조건 추가

**응용 분야**:
- 금융 거래 매칭
- 데이터 분석
- 알고리즘 문제 해결

```javascript
// 해시맵을 이용한 방식
function twoSum(arr, target) {
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(arr[i], i);
    }
    
    return null;
}

// 정렬된 배열에서의 투 포인터 방식
function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return null;
}
```

### 3.4 배열 병합 (Array Merge)
두 개의 정렬된 배열을 하나의 정렬된 배열로 병합하는 알고리즘입니다.

**작동 원리**:
1. 두 배열의 첫 번째 요소부터 비교
2. 더 작은 요소를 결과 배열에 추가
3. 사용된 배열의 포인터 이동
4. 남은 요소들 처리

**최적화 기법**:
- 미리 결과 배열 크기 할당
- 포인터 이동 최소화
- 병합 시점 최적화

**응용 분야**:
- 병합 정렬의 핵심 연산
- 데이터 통합
- 실시간 데이터 동기화

```javascript
function mergeArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    // 남은 요소 처리
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// 효율적인 구현 (미리 크기 할당)
function mergeArraysOptimized(arr1, arr2) {
    const result = new Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;
    let k = 0;
    
    while (i < arr1.length && j < arr2.length) {
        result[k++] = arr1[i] <= arr2[j] ? arr1[i++] : arr2[j++];
    }
    
    while (i < arr1.length) result[k++] = arr1[i++];
    while (j < arr2.length) result[k++] = arr2[j++];
    
    return result;
}
```

### 3.5 배열 중복 제거 (Array Deduplication)
배열에서 중복된 요소를 제거하는 알고리즘입니다.

**구현 방법**:
1. Set 객체 사용
2. 필터 사용
3. 객체/맵 사용
4. 정렬 후 순차 처리

**최적화 기법**:
- 해시셋 사용으로 조회 시간 최적화
- 메모리와 성능 간의 트레이드오프 고려
- 순서 보존 여부에 따른 최적화

```javascript
// Set을 이용한 방법
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// 필터를 이용한 방법 (순서 보존)
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 객체를 이용한 방법 (순서 보존)
function removeDuplicatesObject(arr) {
    const seen = {};
    return arr.filter(item => {
        if (seen.hasOwnProperty(item)) {
            return false;
        }
        seen[item] = true;
        return true;
    });
}
```

각 알고리즘은 특정 상황에서 장단점이 있으며, 실제 사용 시에는 다음 요소들을 고려해야 합니다:

1. 데이터 크기
2. 메모리 제약
3. 성능 요구사항
4. 데이터 특성 (정렬 여부, 중복 정도 등)
5. 안정성 요구사항
6. 구현 복잡도