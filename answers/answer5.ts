function removeInteger(integer_list: [], values_list: []){
    var result: [] = []
    for(let index = 0; index< integer_list.length; index++){
            if(values_list.includes(integer_list[index]) == false){
               result.push(integer_list[index]);
               }
      }
      return result;
}