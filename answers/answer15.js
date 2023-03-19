function nearestSq(n){
    if(Math.sqrt(n) === n/n){
      return n
    }else{
      return Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n))
    }
}