from sys import argv

script = argv[0]
if len(argv) > 1:
  # set filename to the first argument
  filename = argv[1]
else:
  # if there is no file defined use this file
  filename = argv[0] 

try: input = raw_input
except NameError: pass
  
txt = open(filename)

print ('Here\'s your file %r:' %filename)
print (txt.read())

print ("type the filename again:")
file_again = input('some other file > ')

txt_again = open(file_again)

print (txt_again.read())