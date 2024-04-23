const periodIsLate = (last: number, today: number, cycleLength: number): boolean => 
    (today-last)/ (1000*60*60*24)>cycleLength ? true : false