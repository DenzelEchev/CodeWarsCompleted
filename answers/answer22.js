function digitize(n) {
    let numArr = n.toString().split('')
    return numArr.reverse().map(e => +e)
  }