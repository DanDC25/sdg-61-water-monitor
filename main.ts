radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    music.playMelody("C5 C5 - - - - - - ", 120)
})
input.onButtonPressed(Button.A, function () {
    Starter = false
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    music.playMelody("- - - - - - C C ", 120)
})
input.onButtonPressed(Button.B, function () {
    Starter = true
})
let Starter = false
if (true) {
    radio.setGroup(1)
    if (input.lightLevel() > 120) {
        radio.sendString("Clean")
    } else if (input.lightLevel() < 120) {
        radio.sendNumber(1)
    }
} else {
    basic.clearScreen()
}
