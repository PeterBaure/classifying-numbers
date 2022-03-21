input.onButtonPressed(Button.A, function () {
    Num += -1
    basic.showNumber(Num)
})
input.onButtonPressed(Button.AB, function () {
    if (Num < 0) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . . .
            # . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Num += 1
    basic.showNumber(Num)
})
input.onGesture(Gesture.Shake, function () {
    O_or_E = Num % 2
    if (O_or_E == 0) {
        basic.showString("Even")
    } else {
        basic.showString("Odd")
    }
})
let O_or_E = 0
let Num = 0
Num = 0
basic.forever(function () {
	
})
