// WAHT IS THIS?
// this is a canvas with 1 perceptron that guesses where a dot is relavant to a line.
// if it is correct the dot will be colored green

const drawLine = [
  0, 500,
  300, 0
]

let getLabel = (x,y) => {
  let check2 = (drawLine[2] / (drawLine[1] / (drawLine[1] - y)))
  return (x < check2) ? 1 : -1
}
const log = console.log

const size = 500

class Point {
  constructor(input) {
    this.y = Math.round(Math.random() * size)
    this.x = Math.round(Math.random() * size)
    this.label = getLabel(this.x,this.y)
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
    this.learningRate = 0.1 // the learning rate
  }
  // guess a output value
  guess(inputs) {
    let sum = this.weights.reduce(
      (acc, el, id) => acc + (el * inputs[id]), 0
    )
    return {
      sign: this.sign(sum),
      full: this.max(sum)
    }
  }
  // train with input data
  train(inputs, target) {
    let guess = this.guess(inputs) // first guess the output
    let error = target - guess.sign // create a error rate
    // tune the weights
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

// create a perceptron
let perceptron = new Perceptron({
  inputs: 2
})

function setup() {
  createCanvas(size,size)
}

function draw() {

  // the basic p5 stuff
  background(255)
  stroke(0)

  // add a line to give some visual feedback
  line(...drawLine)

  let pointsArr = Array(200) // create an array
  .fill(0) // fill the array with data so i can use .map
  .map(el => new Point()) // create an new point   for each array item

  pointsArr.map(el => el.render()) // render the points

  let train = () =>
    pointsArr.map(el =>
      perceptron.train([
        el.x / size * 2 - 1, // convert the position to a value between -1 and 1
        el.y / size * 2 - 1,
        1 // the bias
      ], el.label)
    )
  Array(100).fill(0).map(train) // change the `100` to the amound of training times the amound of pointss

  // render the output of the ml tests to the canvas
  pointsArr.map(el => {
    let guess = perceptron.guess([
      el.x / 255 - 1,
      el.y / 255 - 1,
      1
    ])
    stroke(0)
    if (el.label == guess.sign) {
      fill('green') // this means the dot is write
    } else {
      fill('red') // this means the the dot is not write
    }
    ellipse(el.x,el.y,10,10)
  })
  noLoop() // don't loop the code
}
