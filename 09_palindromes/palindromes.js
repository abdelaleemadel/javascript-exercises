const palindromes = string => {
    const properString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    return properString === properString.split("").reverse().join("")
}
// Do not edit below this line
module.exports = palindromes;
