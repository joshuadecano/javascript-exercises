const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replace(/[^a-z0-9]/g, "");
    temp = word.split("").reverse().join("");
    return temp == word;
};

// Do not edit below this line
module.exports = palindromes;
