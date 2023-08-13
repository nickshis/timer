
let btns = document.querySelectorAll('button')
let timer = document.querySelector('.timer')

let seconds = 0
let minutes = 0
let hours = 0
let interval

btns.forEach(btn => {
    let key = btn.getAttribute('data-btn')
    btn.onclick = () => {
        if(key === 'start'){
            start()
        } else if(key = 'stop'){
            clearInterval(interval)
        } else if(key = 'reset2'){
            reset()
        }
    }
})

function start(){
    if(shrek === 0){
        clearInterval(interval)
    
        interval = setInterval(() => {
            seconds++
            if(seconds === 60){
                seconds = 0
                minutes++
            } else if(minutes === 60){
                minutes = 0
                hours++
            }
    
            timer.innerHTML = `${ hours < 10 ? `0${hours}` : hours}:${ minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        }, 1000)
    }
}

// function reset(){
//     timer.innerHTML = '00:00:00'
// }