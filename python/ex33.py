i = 0
numbers = []

while i < 6:
  print(f'i = {i}')
  numbers.append(i)
  i += 1


print('The numbers:')
for num in numbers:
  print(num, end=' ')

print('')