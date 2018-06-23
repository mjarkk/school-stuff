class Animal(object):
  pass

class Dog(Animal):
  def __init__(self, name):
    self.name = name

class Cat(Animal):
  def __init__(self, name):
    self.name = name

class Person(object):
  def __init__(self, name):
    self.name = name
    self.pet = None

cat = Cat('Cat Name')
person = Person('Mark')
person.pet = Dog('Dog Name')

print(f'My name is: {person.name}')
print(f'The name of my pet is: {person.pet.name}')