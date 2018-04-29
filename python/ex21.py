# function can return things
def add(a, b):
  output = a + b
  print(f'multiply {a} + {b} = {output}')
  return output

def substract(a, b):
  output = a - b
  print(f'multiply {a} - {b} = {output}')
  return output

def multiply(a, b):
  output = a * b
  print(f'multiply {a} * {b} = {output}')
  return output

def devide(a, b):
  output = a / b
  print(f'multiply {a} / {b} = {output}')
  return output

print('some maths')

add_ = add(30, 5)
substract_ = substract(78, 4)
multiply_ = multiply(3, 6)
devide_ = devide(10, 3)

print(f'output: add {add_}, substract {substract_}, multiply {multiply_}, devide {devide_}')