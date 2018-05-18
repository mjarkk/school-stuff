def printArr():
  return print(testarr)

testarr = [435,123,435,545]

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