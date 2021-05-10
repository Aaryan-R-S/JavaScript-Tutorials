let time =document.getElementById('time')


//         var myVar = setInterval(myTimer ,1000);

//         function myTimer() {
//              var d = new Date();
//              document.getElementById("time").innerHTML = d.toLocaleTimeString();
//         }

// like : 
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleString())
// console.log(new Date().toLocaleTimeString())

//OR

function show(){

//  basic date 
    var T = new Date()

//  am/pm
    let n = T.getHours()
    if(n<12){
        N = "A.M." 
    }
    else{
        N = "P.M."
    }

    // hours
    let H = T.getHours()
    if(H<13){
        H = T.getHours()
    }
    else{
        H = T.getHours()-12
    }

    //minutes
    let M= T.getMinutes()
    if (M<10){
        M = `0${T.getMinutes()}` 
    }
    else{
        M = T.getMinutes()
    }

    //seconds
    let S = T.getSeconds()
    if (S<10){
        S = `0${T.getSeconds()}` 
    }
    else{
        S = T.getSeconds()
    }
 
    time.innerHTML = H+":"+M+":"+S+" "+N 

}

setInterval(show, 1000)
