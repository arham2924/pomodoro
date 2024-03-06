
let startTime
let cancelId
let savedTime = 0
const countdown = 65 * 1000

const timerMillis = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMintes = document.querySelector('.timer__minutes')

const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const resetButton = document.querySelector('.stopwatch__reset')

function startTimer () {
    startButton.disabled = true
    stopButton.disabled = false
    resetButton.disabled = false
    startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer () {
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false
    savedTime = Date.now() - startTime + savedTime
    cancelAnimationFrame(cancelId)

}

function resetTimer () {
    startTime = Date.now()
    savedTime = 0
    timerMillis.innerHTML = '000'
    timerSeconds.innerHTML = '05'
    timerMintes.innerHTML = '01'


}

function updateTimer () {
    millisElapsed = Date.now() - startTime + savedTime

    let timeLeftInMS = countdown - millisElapsed

    if (timeLeftInMS < 0) {
        timeLeftInMS = 0
        cancelAnimationFrame(cancelId)
        cancelId = null

    }
    let secondsLeft = timeLeftInMS / 1000
    let minutesLeft = secondsLeft / 60


    let millisText = timeLeftInMS % 1000
    let secondsText = Math.floor(secondsLeft) % 60
    let minutestext = Math.floor(minutesLeft)

    if (minutestext.toString().length === 1) {
        minutestext = minutestext.toString().padStart(2, '0')
    }
    if (secondsText.toString().length === 1) {
        secondsText = secondsText.toString().padStart(2, '0')
    }
    if (millisText.toString().length === 1) {
        millisText = millisText.toString().padStart(2, '0')
    }

    timerMillis.innerHTML = millisText
    timerSeconds.innerHTML = secondsText
    timerMintes.innerHTML = minutestext
    if (cancelId) {
    cancelId = requestAnimationFrame(updateTimer)
    }

}