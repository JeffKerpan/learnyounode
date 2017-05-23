// console.log('HELLO WORLD');

// console.log(process.argv);

// var sum = 0;
// for (var i=2; i<process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }
// console.log(sum);


var fs = require('fs');
// fs.readFileSync(process.argv[2]);
// console.log(process.argv[2]);
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
// console.log(str);
var splitString = str.split('\n');
console.log(splitString.length - 1);
