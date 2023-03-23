let divCon=(x)=>{
    let numArr = []
    let stringArr = []
    for(const char of x){
      if(char !== Number(char)){
        stringArr.push(Number(char))
      }else{
        numArr.push(char)
      }
    }
    return numArr.reduce((a, b)=> a + b, 0)-stringArr.reduce((a, b)=> a + b, 0)
  }