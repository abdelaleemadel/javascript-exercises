const sumAll = function(startNum, endNum) {
    let sum = 0;
if(Number.isInteger(startNum) && Number.isInteger(endNum) && startNum >=0 && endNum >=0) {
    if(endNum > startNum)
    {for(let i = startNum; i <= endNum; i++){
        sum += i
    }} else {
        for(let i = endNum; i <= startNum; i++){
            sum += i
        }
    }
} else {return `ERROR`}
return sum;
};
// Do not edit below this line
module.exports = sumAll;
