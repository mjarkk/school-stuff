// made a Linear algebra libary to learn how to do mathematical functions on matrices

class Matrix {
  constructor(rows, colls) {
    this.rows = rows
    this.colls = colls
    this.matrix = Array(rows).fill([]).map(i => Array(colls).fill(0)) // create the matrix and fill it with nulls
  }
  multiply(n, toDo) {
    // set toDo to true to force normal multiply
    // set toDo to false to force a matrix product
    // n can be a number or matrix array
    if ((typeof n == 'object' && n.length != this.matrix.length && typeof toDo == 'undefined') || (typeof toDo == 'boolean' && toDo === false)) {
      return Array(n[0].length)
      .fill(Array(this.matrix.length).fill(0))
      .map((el, index1) =>
        el.map((el, index2) =>
          this.matrix[index1].reduce((acc, el, i) =>
            acc + (el * n[i][index2])
          ,0)
        )
      )
    } else {
      this.mathWrapper(n, 'multiply')
      return this.matrix
    }
  }
  add(n) {
    // n can be a number or matrix array
    this.mathWrapper(n, 'add')
    return this.matrix
  }
  mathWrapper(n, toDo) {
    let wrapper = (h, g) =>
      (toDo == 'add') ?
        h + g :
        h * g
    return this.matrix = this.matrix.map((el, index) =>
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
