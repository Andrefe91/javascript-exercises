const removeFromArray = function(array, ...restArguments) {

    newArray =[];
    deleteIndices = [];

    /*We must first find de indices to delete within the array*/
    for (let i in restArguments) {
        for (let j in array){
            if (restArguments[i] === array[j]){
                deleteIndices.push(j);
            }
        }
    }

    /*We need to sort the indices*/
    deleteIndices.sort();

    /* Now, instead of delete entries in the old array, we populate a new one*/
    outer:for (let i in array){
        for (let j of deleteIndices) {
            if (i == j){
                continue outer;
            } 
        }
        newArray.push(array[i]);
    }

    return newArray;

};


// Do not edit below this line
module.exports = removeFromArray;
