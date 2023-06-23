const palindromes = function (phrase) {

    /*First must get rid of the NOT alphanumeric characters*/
    phrase = phrase.toLocaleLowerCase();
    phraseAlphanumerical = phrase.replace(/[^a-z0-9]/g, '');

    /*And now obtain an array along with it's character length*/
    let array = Array.from(phraseAlphanumerical);
    lengthArray = array.length;

    let count = 0;

    over: for (let i = lengthArray-1; i >= 0; i--) {
        if (array[i] != array[count]){
            return false;
        }
        count += 1;
    };

    return true;
};

// Do not edit below this line
module.exports = palindromes;
