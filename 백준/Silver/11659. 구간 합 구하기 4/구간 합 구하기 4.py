import sys

N, M = map(int, sys.stdin.readline().split())
lst = list(map(int, sys.stdin.readline().split()))

s_lst = [0] * (N + 1)
for i in range(1, N + 1):
    s_lst[i] = s_lst[i - 1] + lst[i - 1]

for _ in range(M):
    i, j = map(int, sys.stdin.readline().split())
    print(s_lst[j] - s_lst[i - 1])
