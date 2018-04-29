from sys import argv

if len(argv) > 1:
  input_file = argv[1]
else:
  input_file = 'ex20.py'

def print_all(f):
  print (f.read())

def rewind(f):
  f.seek(0)

def print_a_line(line_count, f):
  print( line_count, f.readline())

current_file = open(input_file)

print('first lets print the whole file: \n')

print_all(current_file)

print('now lets rewind, kind of like a tape.')

rewind(current_file)

print('lets print three lines:')

current_line = 1
print_a_line(current_line, current_file)

current_line += 1
print_a_line(current_line, current_file)

current_line += 1
print_a_line(current_line, current_file)
