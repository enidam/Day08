function convertStrToInt(str) {

    var str = parseInt(str);
    return str
};
console.log(convertStrToInt("44"));
console.log(convertStrToInt("27"));
console.log(convertStrToInt("JeffBezos"));

module.exports = convertStrToInt;
