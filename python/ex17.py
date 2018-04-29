from sys import argv
from os.path import exists

try: input = raw_input
except NameError: pass

if len(argv) > 2:
  from_file = argv[1]
  to_file = argv[2]
  print(f'Copying form {from_file} to {to_file}')
  in_file = open(from_file)
  indata = in_file.read()
  print(f'The input file is {len(indata)} bytes long')
  print(f'Does the output file exsist? {exists(to_file)}')
  print('Ready, hit RETURN to continue, CTRL-C to abort.')
  input()

  out_file = open(to_file, 'w')
  out_file.write(indata)

  print(f'Copied data to {to_file}')

  out_file.close()
  in_file.close()
else:
  print('need more arguments')
  print('try: python ex17.py test.txt test2.txt')