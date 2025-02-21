radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        rueda()
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
function rueda2 () {
    motorbit.turnleft(100)
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
function rueda () {
    motorbit.turnright(100)
}
input.onButtonPressed(Button.AB, function () {
    if (true) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(0)
    }
})
function ruedas2 () {
    motorbit.brake()
}
radio.setGroup(555)
