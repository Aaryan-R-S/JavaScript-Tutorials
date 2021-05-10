let x= new Date()
console.log(x)

// +1sec from reference date&time
console.log(new Date(1000))

//custom date--month starts with 0
console.log(new Date(2002, 6, 7))
console.log(new Date('July 07 2002'))

///DATE FORMAT --
// var d = new Date("YYYY-MM-DDTHH:MM:SSZ");
var d = new Date("2015-03-25T12:34:00Z");
var d = new Date("2015-03-25T12:34:00-06:30");
var d = new Date("2015-03-25T12:34:00+06:30");
//see difference in outputs


//get items--0 means sunday
console.log(x.getDay())

//set items
x.setDate(26)
console.log(x)

//insert time on web page--using function
function T(){
    let z=document.querySelector('div')
    z.innerHTML = new Date();
}
setInterval(T,1000)