def calculating(num1, num2):
  out1 = str(num1)
  out2 = str(num2)
  out3 = str(num1 + num2)
  out4 = str(num1 * num2)
  print(' ')
  print(f'Num1: {out1}, Num2: {out2}')
  print(f'Num1 + Num2 = {out3}')
  print(f'Num1 * Num2 = {out4}')

# give numbers directly
calculating(10, 20)

# give the numbers via a viaraible
Num1 = 5
Num2 = 9
calculating(Num1, Num2)

# caluculate inside in the inputs
calculating(10 * 0.3, 5 * 6)