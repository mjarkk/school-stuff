testarr = [435,123,435,545]

def printArr():
  return print(testarr)

printArr()
del testarr[0]
printArr()

testarr = {
  'itemOne': 1,
  'itemTwo': 2,
  'itemThree': 3
}

printArr()
del testarr['itemTwo']
printArr()

itemOne = testarr.get('itemOne', 'Not found')
print(f'Index for itemOne: {itemOne}')