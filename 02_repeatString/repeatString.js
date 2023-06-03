const repeatString = function(string, num) {
    result = "";

    if (num < 0){
        return "ERROR"
    }
    for(let i=1; i<= num; i++){
        result += string;
    }

    return result;
};

console.log(repeatString("prueba",3));

// Do not edit below this line
module.exports = repeatString;
