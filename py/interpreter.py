def deadfish(prog):
	n = 0
	for s in prog:
		if s == 'i':
			n += 1
		if s == 'd':
			n -= 1
		if s == 's':
			n **= 2
		if s == 'o':
			print(n, end="")
	n = min(n, 0) % 256

deadfish("iiiiiiso")