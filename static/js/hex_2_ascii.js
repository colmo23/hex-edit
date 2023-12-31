
function cleanString(str){
    cleanedStr = str.replace(/(\r\n|\n|\r)/gm, "");
    cleanedStr = cleanedStr.replace(/\s+/g, '');
    return cleanedStr;
}

function hexToAscii(str){
    hexString = cleanString(str);
    strOut = '';
    for (x = 0; x < hexString.length; x += 2) {
        charCodeInt = parseInt(hexString.substr(x, 2), 16);
        if ((charCodeInt >= 32) && (charCodeInt <= 126)){
                strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
        } else {
                strOut += ".";
        }
    }
    lineBreakedAscii = addLineBreaksToAscii(strOut);
    return lineBreakedAscii;
}

function hexToFormattedHex(str){
    hexString = cleanString(str);
    strOut = '';
    for (x = 0; x < hexString.length; x += 2) {
        hexPair = hexString.substr(x, 2);
        strOut += hexPair + " ";
    }
    lineBreakedHex = addLineBreaksToHex(strOut);
    return lineBreakedHex;
}

function addLineBreaksToHex(str){
    strOut = '';
    for (x = 0; x < str.length; x += 48) {
        hexLinePart1 = str.substring(x, x+24);
        hexLinePart2 = str.substring(x+24, x+48);
        strOut = strOut + hexLinePart1 + "  " + hexLinePart2 + "\n";
    }
    return strOut;
}

function addLineBreaksToAscii(str){
    strOut = '';
    for (x = 0; x < str.length; x += 16) {
        hexLinePart1 = str.substring(x, x+ 8);
        hexLinePart2 = str.substring(x + 8, x+16);
        strOut = strOut + hexLinePart1 + " " + hexLinePart2 + "\n";
    }
    return strOut;
}

console.log("line 1\nline2");
console.log(cleanString("line 1\nline2"));
console.log(hexToAscii("30313233343536"))
console.log(hexToAscii(" 30 313233 343536  \n 31 32 45"))
console.log(hexToFormattedHex("    30 313233 343536  ff a"))
console.log(addLineBreaksToHex("30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31 30 31 31"))
console.log(addLineBreaksToAscii("123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"));
