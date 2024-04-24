const nearestSqrt = (number: number) =>
    Math.sqrt(number) === number/number ? number 
    :
    Math.round(Math.sqrt(number)) * Math.round(Math.sqrt(number))