console.log("Heloo wrid");
function foo(){
	var a = b = 43;
}
foo();
//console.log(a == undefined); 
console.log(`b = ${b}`);

/*process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var inputs = [];

rl.on('line', (cmd) => {
  var tmp = cmd.trim().split(' ');  //去掉两边的空白符，防止中间还有空格，分割之
  for(var i = 0; i < tmp.length; i++){
    if(tmp[i] !== '') inputs.push(tmp[i]);
  }
}).on('close', (cmd) =>{
    console.log(`You just typed: ${inputs}, average is ${average(inputs)}`);
    process.exit(0);
});

function average(arr){
  var sum = arr.reduce((a, b) => { return parseInt(a) + parseInt(b); });
  return avg = sum / arr.length;
}


console.log(process.argv);

