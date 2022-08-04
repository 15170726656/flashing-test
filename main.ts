if (2 == 2) {
    basic.showString("1，。11")
} else {
    basic.showIcon(IconNames.Heart)
}
basic.forever(function () {
    if (2 == 2) {
        basic.showString("Heo!")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
    if ((1 as any) == (2 as any)) {
        basic.showString("Heo!")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
