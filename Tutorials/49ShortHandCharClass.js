console.log((''));
console.log(('Tut 49'));

//Character classes
let regx = /\warry/        //   \w means --word character _  or alphabet or no.s
regx = /\w+rry/            //   more than one word characters
regx = /\Wlol/             //   \W (capital)means non word character

regx = /\d56/              //   \d means a digit
regx = /\d+64/             //   \d means some digits
regx = /\D45/              //   \D means non digit

regx = /\som/              //   \s means space character
regx = /\s+om/             //   \s+ means more than one space character
regx = /\Smm/              //   \S means non-space character
regx = /\S+mm/             //   \S means more than one non-space characters

regx =/642\b/               //   means word boundary

let str = 'Harry Bhai45642 #lol         ommoc'

let result = regx.exec(str)
console.log('The result from exec is ' + result);

if (regx.test(str)) {
    console.log('Right');
}
else {
    console.log('Wrong')
}

