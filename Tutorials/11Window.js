let a= window;
//window is a global method
//see all method included in it in console
console.log(a)

//IMPORTANT --
// window.print()    -- print the page of window
// window.alert()        -- alert
// document.innerHTML()   -- dom write
// console.log()        -- browser console write

//other -- 
// window.history.back();   // go back to previous webpage
// window.history.go(-2);   // go back 2 pages behind

//see their outputs due to console.log(a)
// a=alert('Hi')         --undefined
// a=prompt('Hi')       --typed value
// a=confirm('Hi')         -- true/false
console.log(a)

//browser display info
a=window.innerHeight
console.log(a)
a=window.innerWidth
console.log(a)
a=window.scrollX
console.log(a)
a=window.scrollY
console.log(a)
a=window.location
console.log(a)
a=window.location.toString()//  only http://127.0.0.1
console.log(a)



