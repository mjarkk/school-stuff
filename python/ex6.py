# Strings and Text

x = "There are %d types of people." % 2
binary = "binary"
do_not = "don't"
y = "Those who know %s and those who %s." % (binary, do_not)

print x
print y

print "I said: %r." % x # the code will add ` ' ` before and after %r
print "I also said: %s." % y # with %s it won't do that

hilarious = False
joke_evaluation = "Isn't that joke so funny?! %r"

print joke_evaluation % hilarious
