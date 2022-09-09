def on_forever():
    radio.set_group(6.1)
    if input.light_level() > 120:
        radio.send_string("Clean")
        music.play_melody("- - - - - - C C ", 120)
        basic.show_leds("""
            . # # # .
                        # . . . .
                        # . . . .
                        # . . . .
                        . # # # .
        """)
        basic.pause(1000)
        basic.show_string("Clean")
    elif input.light_level() < 120:
        radio.send_string("Dirty")
        music.play_melody("C5 C5 - - - - - - ", 120)
        basic.show_leds("""
            . # # # .
                        # . . . .
                        # . . . .
                        # . . . .
                        . # # # .
        """)
        basic.pause(1000)
        basic.show_string("Dirty")
basic.forever(on_forever)


