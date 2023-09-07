const removeFromArray = function(array,nums) {
let argumentsLength = arguments.length;
for( let i = 1; i < argumentsLength; i++)
{
    let num = arguments[i];
let index = array.indexOf(num);
if(index != -1)
{array.splice(index,1);
}}
return array;
};
console.log(removeFromArray([1,2,3,4],5));
// Do not edit below this line
module.exports = removeFromArray;
