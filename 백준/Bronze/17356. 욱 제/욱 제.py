import sys
n = list(map(int, sys.stdin.readline().split()))
print(1 / (1 + 10 ** ((n[1] - n[0]) / 400)))