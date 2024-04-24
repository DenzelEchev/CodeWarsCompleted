const chromosomeCheck = (sperm: string): string => 
    sperm.toUpperCase() === 'XY'?  
    "Congratulations! You're going to have a son." 
    :
    "Congratulations! You're going to have a daughter."