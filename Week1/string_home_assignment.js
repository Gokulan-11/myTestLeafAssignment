//example 1
let s = `Hello World`;
let sNew = s.split(" ");
console.log(sNew[1].length);

//example 2
let s2 = " fly me to the moon "
let trimmedString = s2.trim();
let words = (trimmedString.split(" "));
console.log(words[4].length);


//example 3  -- 
function isAnagram(word1, word2) {
    let firstWord = word1.toLowerCase().replaceAll(" ", "");
    let secondWord = word2.toLowerCase().replaceAll(" ", "");

    let newWord = firstWord.concade(secondWord);

    let allMatchedj = true;
    let allMatchedi = true;

    for (let i = 0; i < newWord.length; i++) {
        for (let j = 0; j < newWord.length; j++) {
            if (newWord.charAt(i) === newWord.charAt(j)) {
                allMatchedj = false;
            }

        }
        

    }
}

