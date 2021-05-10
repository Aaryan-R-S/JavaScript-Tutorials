var a = new Audio('52chat.mp3')

let alarm = document.getElementById('alarm')
let setAlarm = document.getElementById('setAlarm')

setAlarm.addEventListener('click', () => {

    let j = new Date(alarm.value)  // Alarm Time

    let now = new Date()           // Current Time

    let timeToRing = j - now


    if (timeToRing >= 0) {
        setTimeout(() => {
            a.play()
        }, timeToRing)
    }
    else{
        alert('You entered an Invalid Alarm Date or Time !')
    }
})




