Math.random() => r
    0 <= r < 1

roll(min, max) => n
    min <= n < max

1. 1 <= n < 7
2. 1 - 1 <= n - 1 < 7 - 1
3. 0 <= n - 1 < 6
4. 0/6 <= (n - 1)/6 < 6/6
5. 0 <= (n - 1)/6 < 1

6. (n - 1)/6 = r
7. n - 1 = r * 6
8. n = (r * 6) + 1
================================

1. min <= n < max
2. min - min <= n - min < max - min
3. 0 <= n - min < max - min
4. 0/(max - min) <= (n - min)/(max - min) < (max - min)/(max - min)
5. 0 <= (n - min)/(max - min) < 1

6. (n - min)/(max - min) = r
7. n - min = r * (max - min)
8. n = r * (max - min) + min