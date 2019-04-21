function convertToRoman(num) {
    let res = parseInt(num);
    let nM = parseInt(res / 1000);
    res %= 1000;
    let nD = parseInt(res / 500);
    res %= 500;
    let nC = parseInt(res / 100);
    res %= 100;
    let nL = parseInt(res / 50);
    res %= 50;
    let nX = parseInt(res / 10);
    res %= 10;
    let nV = parseInt(res / 5);
    res %= 5;
    let nI = res;

    let romanNum = '';
    let romanChars = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let romanCharTimes = { 'M': nM, 'D': nD, 'C': nC, 'L': nL, 'X': nX, 'V': nV, 'I': nI };

    console.log(romanCharTimes);

    for (let j = 0; j < romanChars.length; j++) {
        let curChar = romanChars[j];
        let preChar = romanChars[j - 1]; // the char before curChar
        let grandChar = romanChars[j - 2]; // the char before preChar
        
        let curCharTime = romanCharTimes[curChar];
        let preCharTime = romanCharTimes[preChar];

        if (curCharTime == 4) { // if some char has appeared 4 times
            if (preCharTime == 0) { // case: CXXXX => XL
                romanNum += (curChar + preChar);
            }
            else { // case: LXXXX => XC
                if (romanNum.length > 0) {
                    // delete preChar
                    romanNum = romanNum.slice(0, romanNum.length - 1);
                }
                romanNum += (curChar + grandChar);
            }
        }
        else {
            for (let i = 0; i < curCharTime; i++) romanNum += curChar;
        }
    }

    return romanNum;

}

console.log(convertToRoman(9));
