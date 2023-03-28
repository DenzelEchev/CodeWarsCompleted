function pigIt(str){
    let strArr = str.split(' ')
    let pigLat = []
    const newArr = strArr.map((x) => {
      if(x.includes('!') || x.includes('?')){
        pigLat.push(x)
      }else{
        pigLat.push(x.substring(1) + x.substring(0,1) + 'ay')
      }
    })
    return pigLat.join(' ')
  }