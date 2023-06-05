const sumAll = function(numberOne, numberTwo) {

    if (typeof numberOne !== 'number' || typeof numberTwo !== 'number' || numberOne < 0 || numberTwo < 0){
        return 'ERROR'

    } else {

        if (numberOne > numberTwo){
            min = numberTwo;
            max = numberOne;
        }else {
            max = numberTwo;
            min = numberOne;
        }
    
        total = 0;
        for (min; min<= max; min++){
            total += min;
        }
    
        return total;

    }
};

sumAll(1,10);
// Do not edit below this line
module.exports = sumAll;
