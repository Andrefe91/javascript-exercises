const fibonacci = function(position) {

    if (position < 0) {
        return 'OOPS';
    }

    /*First, define a starting array and variable for loops*/
    let numberLoops = position -2; 
    let sequence = [1,1];

    /*Now, construct the Sequence with a loop*/
    for (let i = numberLoops; i > 0; i--) {
        
        let arrayLength = sequence.length -1;

        sequence.push(sequence[arrayLength]+sequence[arrayLength-1]);
    }
    
    return sequence[position-1];
};


// Do not edit below this line
module.exports = fibonacci;
