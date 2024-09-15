N, p, q = map(int, input().split())
dp = {0: 1}

def rec(i):
    if i in dp:
        return dp[i]
    dp[i] = rec(i // p) + rec(i // q)
    return dp[i]

print(rec(N))
