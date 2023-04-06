let acc_y = 0
let acc_x = 0
let x = 2
let y = 2
basic.forever(function () {
    led.plot(x, y)
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    if (acc_x < -150 && x > 0) {
        x += -1
    }
    if (acc_x > 150 && x < 4) {
        x += 1
    }
    if (acc_y > 150 && y < 4) {
        y += 1
    }
    if (acc_y < -150 && y > 0) {
        y += -1
    }
    basic.pause(100)
    basic.clearScreen()
})
