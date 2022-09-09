input.onButtonPressed(Button.A, function () {
    Starter = false
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == Clean) {
        basic.showString("Clean")
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        music.playMelody("- - - - - - C C ", 120)
    } else if (receivedString == Dirty) {
        basic.showString("Dirty")
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        music.playMelody("C5 C5 - - - - - - ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    Starter = true
})
let Starter = false
let Dirty = ""
let Clean = ""
if (true) {
    Clean = "Clean!"
    Dirty = "Dirty!"
    radio.setGroup(1)
    if (input.lightLevel() > 120) {
        radio.sendString("" + (Clean))
    } else if (input.lightLevel() < 120) {
        radio.sendString("" + (Dirty))
    }
}
