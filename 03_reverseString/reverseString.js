const reverseString = function(string) {

    let len = string.length;
    let reversedPhrase = "";

    for (let i= 0; i<= len; i++){
        reversedPhrase += string.slice(len-1-i,len-i);
    }

    return reversedPhrase;

};

// Do not edit below this line
module.exports = reverseString;
