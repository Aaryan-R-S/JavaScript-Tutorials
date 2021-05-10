console.log('')
console.log('tut17&18')

let k =document.querySelector('#h')
k.addEventListener('click', ()=>{
    console.log('Hi')
})

// others----- mouse down, mouse up, dblclick, mouseover, mouseout, mouseenter, mouseleave, mousemove

//Controlling bgc with mouse position--
k.addEventListener('mousemove', (a)=>{
        console.log('Mouse is moving!')
        document.body.style.backgroundColor=`rgb(${a.offsetX},${a.offsetX},100)`
})

//REMOVE EVENT LISTENER
element.removeEventListener("mousemove", myFunction);