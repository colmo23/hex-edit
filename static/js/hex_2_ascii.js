

function hexToAscii(str){
//    hexString = str;
    hexString = str.replace(/\s+/g, '');
    strOut = '';
    for (x = 0; x < hexString.length; x += 2) {
        charCodeInt = parseInt(hexString.substr(x, 2), 16);
        if ((charCodeInt >= 32) && (charCodeInt <= 126)){
                strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
        } else {
                strOut += ".";
        }
    }
    return strOut;    
}

console.log(hexToAscii("30313233343536"))
console.log(hexToAscii(" 30 313233 343536  "))
