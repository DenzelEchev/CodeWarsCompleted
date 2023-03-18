var countSheep = function (num){
    var sheepCounter = []
    for (let index = 1; index <= num; index++){
    sheepCounter.push(`${index} sheep...`)
    }
    return sheepCounter.join('')
  }