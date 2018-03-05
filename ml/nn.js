// a scalleton for a neural network

const flatten = (arr) =>
  Array.prototype.concat(...arr);

class NN { // neural network class
  constructor(inputData) {
    // inputData = {
    //   hiddenNodes: 2, // the amound of hidden notes
    //   inputsNodes: 3, // the amound of inputs
    //   ouputNodes: 1 // the amoud of output notes
    // }
    this.hiddenNodes = inputData.hiddenNodes
    this.hiddenNodesList = []
    this.inputsNodes = inputData.inputsNodes
    this.outputNodes = inputData.outputNodes
    for (var i = 0; i < this.hiddenNodes; i++) {
      this.hiddenNodesList.push(new Perceptron({
        inputs: this.inputsNodes
      }))
    }
  }
  guess(inputs) {
    let output = this.hiddenNodesList.map(perceptron => perceptron.guess(inputs)) // returns an array with output data from the perceptron guess
    // log(output)
    return {}
  }
  train(inputs, outputs) {
    this.guess(inputs)
    return {}
  }
}

class Perceptron {
  constructor(inputData) {
    // inputData = {
    //   inputs: <number (amound of weights this perceptron need)>
    // }
    this.weights = Array(inputData.inputs) // creata a new array
    .fill(0) // fill the array with nulls
    .map(el =>
      Math.random() * 2 - 1
    )
    this.weights.push(1) // add bias
    this.learningRate = 0.05 // the learning rate
  }
  // guess a output value
  guess(inputs) {
    inputs.push(1) // add bias to the inputs
    let sum = this.weights.reduce(
      (acc, el, id) => acc + (el * inputs[id]), 0
    )
    return {
      sign: this.sign(sum),
      full: this.max(sum)
    }
  }
  train(inputs, target) {
    let guess = this.guess(inputs) // guess a output
    inputs.push(1) // add bias to the inputs
    let error = target - guess.sign // create a error rate
    this.weights = this.weights.map((el, index) =>
      el + (inputs[index] * error * this.learningRate)
    )
    let returnData = {error: error, ...guess}
    return returnData
  }
  // sign a value
  sign(input) {
    return (input > 0) ? 1 : -1
  }
  // let a value not be higher than 1 or lower -1
  max(input) {
    return (input >= 1) ?
      1 :
      (input <= -1) ?
        -1 :
        input
  }
}
