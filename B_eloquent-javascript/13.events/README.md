# Exercises

## Censored keyboard

Between 1928 and 2013, Turkish law forbade the use of the letters Q, W,
and X in official documents. This was part of a wider initiative to stifle
Kurdish culture—those letters occur in the language used by Kurdish
people but not in Istanbul Turkish.
As an exercise in doing ridiculous things with technology, I’m asking
you to program a text field (an `<input type="text">` tag) that these letters
cannot be typed into.
(Do not worry about copy and paste and other such loopholes.)

## Mouse trail

In JavaScript’s early days, which was the high time of gaudy home pages
with lots of animated images, people came up with some truly inspiring
ways to use the language.
One of these was the “mouse trail”—a series of images that would
follow the mouse pointer as you moved it across the page.
In this exercise, I want you to implement a mouse trail. Use absolutely
positioned `<div>` elements with a fixed size and background color (refer to
the code in the “Mouse Clicks” section for an example). Create a bunch
of such elements and, when the mouse moves, display them in the wake
of the mouse pointer.
There are various possible approaches here. You can make your solution
as simple or as complex as you want. A simple solution to start with
is to keep a fixed number of trail elements and cycle through them, moving
the next one to the mouse’s current position every time a "mousemove"
event occurs.
