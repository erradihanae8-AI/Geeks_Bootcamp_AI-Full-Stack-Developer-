function makeAllCaps(words) {
    return new Promise((resolve, reject) => {

        if (words.every(word => typeof word === "string")) {
            const uppercasedWords = words.map(word => word.toUpperCase());
            resolve(uppercasedWords);
        } else {
            reject("Error: All elements must be strings!");
        }

    });
}


function sortWords(words) {
    return new Promise((resolve, reject) => {

        if (words.length > 4) {
            const sortedWords = words.sort();
            resolve(sortedWords);
        } else {
            reject("Error: Array must contain more than 4 words!");
        }

    });
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))//Error: All elements must be strings!

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))//Error: Array must contain more than 4 words!

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
