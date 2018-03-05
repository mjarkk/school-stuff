// made a Linear algebra libary to learn how to do mathematical functions on matrices

class Matrix {
  constructor(rows, colls) {
    this.rows = rows
    this.colls = colls
    this.matrix = Array(rows).fill([]).map(i => Array(colls).fill(0)) // create the matrix and fill it with nulls
  }
  multiply(n) {
    // n can be a number or matrix array
    this.mathWrapper(n, 'multiply')
  }
  add(n) {
    // n can be a number or matrix array
    this.mathWrapper(n, 'add')
  }
  mathWrapper(n, toDo) {
    let wrapper = (h, g) =>
      (toDo == 'add') ?
        h + g :
        h * g
    this.matrix = this.matrix.map((el, index) =>
      el.map((i, index2) =>
        wrapper(i,
          (typeof n == 'number') ?
            n : // n is just a number
            (n.matrix) ?
              n.matrix[index][index2] : // if the users passes a full matrix class to this it will use it
              n[index][index2]) // if it is just a matrix array it will use that
      )
    )
  }
  showMe () {
    // made console.table simpler
    console.table(this.matrix)
  }
}
