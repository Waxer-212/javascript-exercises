const palindromes = function (string) {

    let characters = "";
    let reversedCharacters = "";
    for(let i = 0; i < string.length; i++) {
        if (string[i].match(/[a-zA-Z0-9]/)) {
            // Convert to lowercase and append to characters and reversedCharacters
            let char = string[i].toLowerCase();
            characters += char;
            reversedCharacters = char + reversedCharacters;
        }
    }

    return characters === reversedCharacters;

};

// Do not edit below this line
module.exports = palindromes;
