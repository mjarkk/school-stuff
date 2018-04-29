def break_words(input):
  words = input.split(' ')
  return words

def sort_words(input):
  return sorted(input)

def print_first_word(input):
  word = input.pop(0)
  print(word)

def print_last_word(input):
  word = input.pop(-1)
  print(word)

def sort_sentence(input):
  words = break_words(input)
  return sort_words(words)

def print_first_and_last(input):
  words = break_words(input)
  print_first_word(words)
  print_last_word(words)

def print_first_and_last_sorted(input):
  words = sort_sentence(input)
  print_first_word(words)
  print_last_word(words)
