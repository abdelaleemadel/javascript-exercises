const repeatString = function(chars, num) {
    let repeatedString = ``;
    if(num < 0){
        return 'ERROR'
    } else
    {for(let i = 0; i < num; i++) {
        repeatedString += chars;
    }}
return repeatedString;
};
/* console.log(repeatString('a',3));
 */// Do not edit below this line
module.exports = repeatString;
