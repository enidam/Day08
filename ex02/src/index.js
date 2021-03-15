function functionPrintInfo(name, age) {


    return (name + age);

}
console.log(functionPrintInfo("\"John\"", 23))
console.log(functionPrintInfo("\"Michael\"", 43))

module.exports = functionPrintInfo;