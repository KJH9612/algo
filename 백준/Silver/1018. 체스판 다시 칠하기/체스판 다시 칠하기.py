N, M = map(int, input().split())
board = [list(input()) for _ in range(N)]

re_paint_count = []

BW = [['B', 'W'] * 4, ['W', 'B'] * 4] * 4
WB = [['W', 'B'] * 4, ['B', 'W'] * 4] * 4

for i in range(N - 7):
    for j in range(M - 7):
        cnt1, cnt2 = 0, 0
        for p in range(8):
            for q in range(8):
                if board[i + p][j + q] != BW[p][q]:
                    cnt1 += 1
                if board[i + p][j + q] != WB[p][q]:
                    cnt2 += 1
        re_paint_count.append(min(cnt1, cnt2))

print(min(re_paint_count))