let changeMe = (moneyIn) =>{
    let amount = ""
    if(moneyIn === "£5"){
      amount = "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p "
    }else if(moneyIn === "£2"){
      amount = "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p "
    }else if(moneyIn === "£1"){
      amount = "20p 20p 20p 20p 20p "
    }else if(moneyIn === "50p"){
      amount = "20p 20p 10p"
    }else if(moneyIn === "20p"){
      amount = "10p 10p"
    }else{
      return moneyIn
    }
    return amount
  }