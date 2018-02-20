# Variables and Printing

import datetime
now = datetime.datetime.now()

name = 'mark'
gender = 'men'
age = now.year - 1999

plus5Years = 5

print 'my name is %s' % name

# can do: print 'my name is %s' % name , 'some text '
# can't do: print 'my name is %s', 'some text ' % name

print 'my name is %s, my age is %d and my gender is %s' % (name, age, gender)

# %s = string OR number
# %d = number

print 'over %d years my age will be: %d' % (plus5Years, plus5Years + age)
