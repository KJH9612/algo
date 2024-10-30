import sys
from collections import Counter

_ = sys.stdin.readline()
N = list(map(int, sys.stdin.readline().split()))
_ = sys.stdin.readline()
M = list(map(int, sys.stdin.readline().split()))

counter = Counter(N)

print(' '.join(str(counter[ele]) for ele in M))