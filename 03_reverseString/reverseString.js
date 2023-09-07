const reverseString = function(string) {
let reversedStr = ``;
let strLen = string.length;
for(let i = 0; i < strLen; i++) {
    reversedStr += string[strLen - 1 - i]
}
return reversedStr;
};
// Do not edit below this line
module.exports = reverseString;
