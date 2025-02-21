radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        rueda1()
    } else if (receivedNumber == 2) {
        rueda2()
    } else if (receivedNumber == 3) {
        ruedas()
    } else if (receivedNumber == 0) {
        ruedas2()
    } else {
    	
    }
})
function ruedas () {
    motorbit.freestyle(100, 100)
}
function rueda1 () {
    motorbit.turnright(100)
}
function rueda2 () {
    motorbit.turnleft(100)
}
function ruedas2 () {
    motorbit.brake()
}
radio.setGroup(555)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
})
