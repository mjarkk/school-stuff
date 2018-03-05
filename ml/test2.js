const size = 500 // size of the board
const log = console.log // a wrapper around console.log
const toRenderPoints = [{"x":232,"y":19,"label":1},{"x":225,"y":43,"label":1},{"x":230,"y":70,"label":1},{"x":230,"y":81,"label":1},{"x":225,"y":93,"label":1},{"x":224,"y":111,"label":1},{"x":225,"y":123,"label":1},{"x":227,"y":138,"label":1},{"x":226,"y":149,"label":1},{"x":224,"y":168,"label":1},{"x":222,"y":181,"label":1},{"x":226,"y":189,"label":1},{"x":226,"y":190,"label":1},{"x":228,"y":199,"label":1},{"x":225,"y":218,"label":1},{"x":225,"y":219,"label":1},{"x":193,"y":216,"label":1},{"x":173,"y":218,"label":1},{"x":156,"y":218,"label":1},{"x":142,"y":218,"label":1},{"x":122,"y":219,"label":1},{"x":112,"y":219,"label":1},{"x":81,"y":222,"label":1},{"x":68,"y":223,"label":1},{"x":52,"y":168,"label":1},{"x":75,"y":133,"label":1},{"x":102,"y":73,"label":1},{"x":56,"y":67,"label":1},{"x":35,"y":69,"label":1},{"x":81,"y":105,"label":1},{"x":108,"y":129,"label":1},{"x":116,"y":167,"label":1},{"x":145,"y":170,"label":1},{"x":159,"y":149,"label":1},{"x":161,"y":125,"label":1},{"x":156,"y":103,"label":1},{"x":155,"y":73,"label":1},{"x":193,"y":68,"label":1},{"x":195,"y":50,"label":1},{"x":186,"y":118,"label":1},{"x":182,"y":145,"label":1},{"x":175,"y":186,"label":1},{"x":152,"y":174,"label":1},{"x":125,"y":112,"label":1},{"x":108,"y":88,"label":1},{"x":111,"y":55,"label":1},{"x":84,"y":28,"label":1},{"x":64,"y":30,"label":1},{"x":68,"y":45,"label":1},{"x":83,"y":89,"label":1},{"x":71,"y":134,"label":1},{"x":69,"y":176,"label":1},{"x":81,"y":186,"label":1},{"x":99,"y":184,"label":1},{"x":101,"y":181,"label":1},{"x":261,"y":265,"label":1},{"x":262,"y":299,"label":1},{"x":260,"y":321,"label":1},{"x":253,"y":339,"label":1},{"x":253,"y":367,"label":1},{"x":255,"y":393,"label":1},{"x":257,"y":410,"label":1},{"x":257,"y":419,"label":1},{"x":256,"y":426,"label":1},{"x":287,"y":258,"label":1},{"x":310,"y":265,"label":1},{"x":351,"y":268,"label":1},{"x":380,"y":268,"label":1},{"x":395,"y":269,"label":1},{"x":442,"y":263,"label":1},{"x":470,"y":265,"label":1},{"x":483,"y":265,"label":1},{"x":499,"y":265,"label":1},{"x":499,"y":265,"label":1},{"x":249,"y":449,"label":1},{"x":256,"y":453,"label":1},{"x":265,"y":472,"label":1},{"x":262,"y":482,"label":1},{"x":300,"y":338,"label":1},{"x":356,"y":385,"label":1},{"x":375,"y":417,"label":1},{"x":381,"y":426,"label":1},{"x":390,"y":327,"label":1},{"x":360,"y":333,"label":1},{"x":306,"y":402,"label":1},{"x":302,"y":432,"label":1},{"x":342,"y":443,"label":1},{"x":392,"y":457,"label":1},{"x":411,"y":456,"label":1},{"x":413,"y":390,"label":1},{"x":409,"y":358,"label":1},{"x":420,"y":326,"label":1},{"x":373,"y":311,"label":1},{"x":327,"y":305,"label":1},{"x":301,"y":334,"label":1},{"x":306,"y":399,"label":1},{"x":337,"y":352,"label":1},{"x":337,"y":381,"label":1},{"x":324,"y":410,"label":1},{"x":319,"y":440,"label":1},{"x":339,"y":447,"label":1},{"x":222,"y":258,"label":-1},{"x":221,"y":274,"label":-1},{"x":220,"y":286,"label":-1},{"x":214,"y":301,"label":-1},{"x":210,"y":320,"label":-1},{"x":214,"y":335,"label":-1},{"x":217,"y":362,"label":-1},{"x":211,"y":386,"label":-1},{"x":203,"y":415,"label":-1},{"x":205,"y":429,"label":-1},{"x":208,"y":454,"label":-1},{"x":201,"y":476,"label":-1},{"x":194,"y":487,"label":-1},{"x":199,"y":267,"label":-1},{"x":164,"y":277,"label":-1},{"x":133,"y":284,"label":-1},{"x":120,"y":280,"label":-1},{"x":114,"y":275,"label":-1},{"x":84,"y":268,"label":-1},{"x":73,"y":270,"label":-1},{"x":88,"y":290,"label":-1},{"x":129,"y":304,"label":-1},{"x":129,"y":318,"label":-1},{"x":107,"y":364,"label":-1},{"x":111,"y":394,"label":-1},{"x":108,"y":431,"label":-1},{"x":104,"y":464,"label":-1},{"x":134,"y":447,"label":-1},{"x":157,"y":336,"label":-1},{"x":169,"y":303,"label":-1},{"x":172,"y":334,"label":-1},{"x":172,"y":374,"label":-1},{"x":168,"y":400,"label":-1},{"x":146,"y":424,"label":-1},{"x":141,"y":418,"label":-1},{"x":135,"y":368,"label":-1},{"x":98,"y":349,"label":-1},{"x":88,"y":333,"label":-1},{"x":128,"y":363,"label":-1},{"x":133,"y":392,"label":-1},{"x":142,"y":423,"label":-1},{"x":163,"y":452,"label":-1},{"x":163,"y":460,"label":-1},{"x":163,"y":460,"label":-1},{"x":275,"y":19,"label":-1},{"x":268,"y":47,"label":-1},{"x":267,"y":66,"label":-1},{"x":274,"y":126,"label":-1},{"x":278,"y":170,"label":-1},{"x":270,"y":191,"label":-1},{"x":298,"y":217,"label":-1},{"x":345,"y":223,"label":-1},{"x":395,"y":226,"label":-1},{"x":434,"y":226,"label":-1},{"x":459,"y":206,"label":-1},{"x":456,"y":199,"label":-1},{"x":357,"y":178,"label":-1},{"x":313,"y":161,"label":-1},{"x":294,"y":107,"label":-1},{"x":321,"y":74,"label":-1},{"x":347,"y":69,"label":-1},{"x":366,"y":76,"label":-1},{"x":384,"y":111,"label":-1},{"x":437,"y":142,"label":-1},{"x":458,"y":131,"label":-1},{"x":402,"y":101,"label":-1},{"x":370,"y":155,"label":-1},{"x":349,"y":135,"label":-1},{"x":413,"y":135,"label":-1},{"x":428,"y":152,"label":-1},{"x":406,"y":164,"label":-1},{"x":394,"y":49,"label":-1},{"x":346,"y":50,"label":-1},{"x":373,"y":55,"label":-1},{"x":427,"y":67,"label":-1},{"x":447,"y":64,"label":-1},{"x":418,"y":40,"label":-1},{"x":312,"y":42,"label":-1},{"x":317,"y":35,"label":-1},{"x":318,"y":114,"label":-1},{"x":315,"y":187,"label":-1},{"x":415,"y":199,"label":-1},{"x":379,"y":199,"label":-1},{"x":343,"y":98,"label":-1},{"x":401,"y":81,"label":-1},{"x":54,"y":280,"label":-1},{"x":41,"y":277,"label":-1},{"x":33,"y":277,"label":-1},{"x":27,"y":279,"label":-1},{"x":35,"y":380,"label":-1},{"x":39,"y":422,"label":-1},{"x":36,"y":439,"label":-1},{"x":27,"y":449,"label":-1},{"x":25,"y":337,"label":-1},{"x":60,"y":397,"label":-1}]
let cnv // make a `global` variable for the canvas
let points
let brain

class Point {
  constructor(inputData) {
    this.x = inputData.x
    this.y = inputData.y
    this.label = inputData.label
    this.render()
  }
  render() {
    stroke(0)
    if (this.label == 1) {
      fill(255)
    } else {
      fill(0)
    }
    ellipse(this.x,this.y,15,15)
  }
}

canvasClick = ev => {
  // add a point to the canvas
  // new Point({
  //   x: ev.offsetX,
  //   y: ev.offsetY,
  //   label: label
  // })
}

setup = () => {
  cnv = createCanvas(size,size)
  cnv.mouseClicked(canvasClick)

  // add the points to the canvas
  points = toRenderPoints.map(el =>
    new Point({
      x: el.x,
      y: el.y,
      label: el.label
    })
  )

  // add the neural network
  brain = new NN({
    hiddenNodes: 4,
    inputsNodes: 2,
    ouputNodes: 1
  })
}

draw = () => {
  points.map(el => {
    let toNN = [
      el.x / size * 2 - 1,
      el.y / size * 2 - 1,
    ]
    let trainoutput = brain.train(toNN, [el.label]) // train the data
    return trainoutput
  })
  noLoop() // don't loop the draw function
}
