def printSomeThing():
  print('test\n')


class testClass(object):
  def __init__(self):
    self.testString = 'Called print from testClass > printText'
  def printText(self):
    print(self.testString)