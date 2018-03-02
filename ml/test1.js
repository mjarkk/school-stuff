const log = console.log

const size = 500

class Point {
  constructor(input) {
    this.y = Math.round(Math.random() * size)
    this.x = Math.round(Math.random() * size)
    this.label = (this.x > this.y) ? 1 : -1
  }
  render () {
    stroke(0)
    if (this.label == 1) {
      fill(255)
    } else {
      fill(0)
    }
    ellipse(this.x,this.y,8,8)
  }
}

class Perceptron {
  constructor(input) {
    // create a new array for the `weights` and give it random values
    this.weights = Array(input.inputs)
    .fill(0)
    .map(el =>
      Math.random() * 2 - 1
    )
    this.weights.push(1)
    this.learningRate = 0.01 // the learning rate
  }
  // guess a output value
  guess(inputs) {
    let sum = 0
    this.weights.map((el, id) => sum += el * inputs[id] )
    let output = this.sign(sum)
    return {
      sign: output,
      full: sum
    }
  }
  // train with input data
  train(inputs, target) {
    let guess = this.guess(inputs).full // first guess the output
    let error = target - guess
    // tune the weights
    this.weights = this.weights.map(el => el + (error * this.learningRate))
    return error
  }
  // sign a value
  sign(input) {
    return (input > 0) ? 1 : -1
  }
}

// create a perceptron
let perceptron = new Perceptron({
  inputs: 2
})

function setup() {
  createCanvas(size,size)
  let inputs = [-1,0.5]
}

function draw() {
  background(255)
  stroke(0)
  line(0,0,size,size)
  line(0,size,size,0)
  let pointsArr = Array(100) // create an array
  .fill(0) // fill the array with data so i can use .map
  .map(el => new Point()) // create an new point for each array item
  pointsArr.map(el => el.render()) // render the point
  let train = () =>
    pointsArr.map(el =>
      perceptron.train([el.x / 255 - 1, el.y / 255 - 1, 1], el.label)
    )
  Array(10000).fill(0).map(train) // train the array amound * 100
  pointsArr.map(el => {
    let guess = perceptron.guess([
      el.x / 255 - 1,
      el.y / 255 - 1,
      1
    ])
    stroke(0)
    if (el.label == guess.sign) {
      fill('green')
    } else {
      fill('red')
    }
    ellipse(el.x,el.y,10,10)
  })
  noLoop() // don't loop the code
}