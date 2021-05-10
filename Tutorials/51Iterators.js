console.log('');
console.log('Tut51');

//array
const arr = ['apple', 'grapes', 'bhindi', 'pear']
console.log('My array is', arr);


//Iterator
function iter(val) {
    let i = 0;
    return {
        next: function () {
            if (i < val.length){
                return {
                    value: val[i++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}


//using Iter
const z = iter(arr)

// FIRST
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());

//SECOND
// console.log(z.next().value);
// console.log(z.next().value);
// console.log(z.next().value);
// console.log(z.next().value);
// console.log(z.next().value);
// console.log(z.next().value);

//THIRD
// console.log(z.next().done);
// console.log(z.next().done);
// console.log(z.next().done);
// console.log(z.next().done);
// console.log(z.next().done);
// console.log(z.next().done);





