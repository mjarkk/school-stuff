from sys import argv

if len(argv) > 1:
  # set filename to the first argument
  filename = argv[1]
else:
  # if there is no file defined use this file
  filename = 'test.txt'

try: input = raw_input
except NameError: pass

print (f'We\'re going to erase {filename}.')
print ('If you don\'t want that, hit CTRL-C (^C).')
print ('If you do want that, hit RETURN.' )

input('?')

print ('opening the file...')
target = open(filename, 'w')

print ('Truncating the file. Goodbye!')
target.truncate()

print ('Now I\'m going to ask you for there lines.')

line1 = input("line 1: ")
line2 = input("line 2: ")
line3 = input("line 3: ")

print ('I\'m going to write these to the file.')

target.write(line1)
target.write('\n')
target.write(line2)
target.write('\n')
target.write(line3)
target.write('\n')

# close the script
target.close()

print('created file')