console.log('');
console.log('Tut 48');

//Charcter Sets
let regx = /Ha[a-z]ry/   //from a to z
regx = /Ha[h-m]ry/       //fro h to m
regx = /Ha[opwa]ry/          // anyone o,p,w OR a
regx = /Ha[dir]ry/       // anyone d,i OR r
regx = /Ha[^dir]ry/       // none of d,i OR r
regx = /H[^fkd]r[rud]yi?/  //mixed
regx = /[a-zA-Z]arry/    //capital included
regx = /[A-Z]arry/    //capital only
regx = /[A-Z]hai[qed1-3][^372]/    //no. also

//Quantifiers
regx = /har{2}y/i     //r is two times
regx = /Harrj{0,2}y/  //means 0 to 2 times--j
regx = /Harr(osj){0,2}y/  //means 0 to 2 times--osj


let str = 'Harry Bhai15'

let result = regx.exec(str)
console.log('The result from exec is '+ result);

if(regx.test(str)){
    console.log('Right');
}
else{
    console.log('Wrong')
}








