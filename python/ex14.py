# python ex14.py testName

from sys import argv

script = argv[0]
if len(argv) > 1:
  user_name = argv[1]
else:
  user_name = 'some name'

try: input = raw_input
except NameError: pass

prompt = '> '

print (f'Hi {user_name}, I\'m the the {script} script')
# Also possible:
# print ('Hi %s, I\'m the %s script.' % (user_name, script))
print ('I\'d like to ask you a few questions.')

print(f'Do you like me {user_name}')
# Also possible:
# print ('Do you like me %s?' % user_name)
likes = input(prompt)

print ('where do you like %s?' % user_name)
lives = input(prompt)

print ('what kind of computer do you have?')
computer = input(prompt)

print ("""
Alright, so you said %r about liking me.
You live in %r. Not sure where that is.
And you have a %r computer. Nice.
""" % (likes, lives, computer))