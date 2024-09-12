function instructions () {
    basic.showString("on button A, emotions are shown",50)
basic.showString("On button b, it will show playing", 50)
basic.showString("On shake, it will be hangry", 50)
}
function food () {
    if (hangry == 0) {
        basic.showString("Sushi")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (hangry == 1) {
        basic.showString("Pizza")
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hangry == 2) {
        basic.showString("Cookie")
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (hangry == 3) {
        basic.showString("Rice")
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (hangry == 4) {
        basic.showString("Chocolate")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (hangry == 5) {
        basic.showString("Fries")
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
    hungry_b()
}
function hangry_a () {
    basic.showString("Hungry")
    basic.showIcon(IconNames.Sad)
    basic.showString("I am hungry give me food ")
    basic.showIcon(IconNames.Angry)
}
// Update lastInteraction on button presses
input.onButtonPressed(Button.A, function () {
    lastInteraction = input.runningTime()
    death = false
    emotion += 1
    emotions()
})
function hungry_b () {
    basic.showString("I am full now")
    basic.showIcon(IconNames.Happy)
    basic.showString("Thanks for feeding me")
}
function emotions () {
    if (emotion <= 0) {
        dying()
    } else if (emotion == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (emotion == 2) {
        basic.showIcon(IconNames.Meh)
    } else if (emotion == 3) {
        basic.showIcon(IconNames.Asleep)
    } else if (emotion == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            # . # . #
            `)
    } else if (emotion == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (emotion == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
}
function dying () {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 500), music.PlaybackMode.UntilDone)
    basic.showString("Death")
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("I am dying")
    basic.showIcon(IconNames.Skull)
    control.reset()
}
input.onButtonPressed(Button.B, function () {
    lastInteraction = input.runningTime()
    death = false
    cricket()
})
input.onGesture(Gesture.Shake, function () {
    lastInteraction = input.runningTime()
    death = false
    hangry += -1
    hangry = randint(0, 5)
    if (death == false) {
        hangry_a()
        food()
    }
})
function cricket () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    score += 1
    score = randint(0, 6)
    if (score == 0) {
        basic.showString("You scored a 1")
    } else if (score == 1) {
        basic.showString("You scored a 2")
    } else if (score == 2) {
        basic.showString("You scored a 3")
    } else if (score == 3) {
        basic.showString("You scored a 4")
    } else if (score == 4) {
        basic.showString("You scored a 6")
    } else if (score == 5) {
        basic.showString("You got out")
    } else if (score == 6) {
        basic.showString("You got out")
    }
}
function pet_rarity () {
    pet_speciality = randint(0, 5)
    if (pet_speciality == 0) {
        basic.showString("Normal")
    } else if (pet_speciality == 1) {
        basic.showString("Rare")
    } else if (pet_speciality == 2) {
        basic.showString("Super Rare")
    } else if (pet_speciality == 3) {
        basic.showString("Mythical ")
    } else if (pet_speciality == 4) {
        basic.showString("Legendary")
    }
}
function start () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 500), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showString("Hello World")
}
let death = false
let lastInteraction = 0
let pet_speciality = 0
let score = 0
let hangry = 0
let emotion = 0
emotion = 3
hangry = 0
score = 0
pet_speciality = 0
start()
pet_rarity()
instructions()
basic.forever(function () {
    // Check if 15 minutes (900,000 milliseconds) have passed since the last interaction
    if (input.runningTime() - lastInteraction > 90000) {
        death = true
    }
})
loops.everyInterval(30000, function () {
    hangry += 1
    emotion += -1
})
