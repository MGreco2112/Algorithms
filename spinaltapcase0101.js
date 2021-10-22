/**
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    const splitArr = [];
    const lowerCaseArr = [];

    if (str.includes(" ")) {
        splitArr.push(str.split(" "))
    } else {
        splitArr.push(str.split(/(?=[A-Z])/));
    }

    // console.log(splitArr);

    for (let i = 0; i < splitArr[0].length; i++) {

        let cased = splitArr[0][i].substring(0).toLowerCase().replace(/_/g,"").replace(" ","");


        lowerCaseArr.push(cased);
    }

    let finishedStr = "";

    for (let i = 0; i < lowerCaseArr.length; i++) {
        if (lowerCaseArr[i+1] != undefined) {
            finishedStr += lowerCaseArr[i] + "-";
        } else {
            finishedStr += lowerCaseArr[i];
        }
    }

    console.log(finishedStr);

  return finishedStr;
}

spinalCase('AllThe-small Things');




/**
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/