import math
import sys

N = int(sys.stdin.readline())
size = list(map(int, sys.stdin.readline().split()))
T, P = map(int, sys.stdin.readline().split())

order = sum(math.ceil(s / T) for s in size)

bundle = N // P
single = N % P

print(order)
print(bundle, single)