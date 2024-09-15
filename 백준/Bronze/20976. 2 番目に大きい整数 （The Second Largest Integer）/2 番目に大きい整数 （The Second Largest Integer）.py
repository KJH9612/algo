# 숫자 입력 받기
numbers = list(map(int, input().split()))

# 정렬
numbers.sort()

# 두 번째로 큰 수 출력
print(numbers[1])