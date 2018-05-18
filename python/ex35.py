from sys import exit

print('type: exit to exit the program')

def ask():
  answer = input('> ')
  if 'exit' in answer:
    exit()
  else:
    print(answer)
  ask()

ask()