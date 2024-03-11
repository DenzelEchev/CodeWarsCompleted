const countSheep = (num: number): string =>{
    var sheepCounter = []
    for (let index = 1; index <= num; index++){
    sheepCounter.push(`${index} sheep...`)
    }
    return sheepCounter.join('')
  }