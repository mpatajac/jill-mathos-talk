---
theme: default
title: Jill - a functional programming language for Nand2Tetris
---

# Slide 1

The frontmatter of this slide is also the headmatter

---
class: text-white
---

# Slide 2
```

It took you {totalAttempts} attempts to guess the number!

```
---

# Slide 2

````md magic-move
```jill
fn printAttemptCount totalAttempts =
	Output::println().
```

```jill
fn printAttemptCount totalAttempts =
	let _ = Output::println(),

	Output::printString("It took you ").
```

```jill
fn printAttemptCount totalAttempts =
	let _ = Output::println(),
	let _ = Output::printString("It took you "),

	Output::printInt(totalAttempts).
```

```jill
fn printAttemptCount totalAttempts =
	let _ = Output::println(),
	let _ = Output::printString("It took you "),
	let _ = Output::printInt(totalAttempts),

	Output::printString(" attempts to guess the number!").
```

```jill
fn printAttemptCount totalAttempts =
	let _ = Output::println(),
	let _ = Output::printString("It took you "),
	let _ = Output::printInt(totalAttempts),
	let _ = Output::printString(" attempts to guess the number!"),
	
	Output::println().
```

```jill
fn printAttemptCount totalAttempts =
    do(
        Output::println(),
        Output::printString("It took you "),
        Output::printInt(totalAttempts),
        Output::printString(" attempts to guess the number!"),
        Output::println()
    ).
```

````

---

# Example

```jill {all|1|1-4|7-8|11-}{maxHeight: '40vh'}
-- @type Point(Int, Int)
type Point = Point(x, y).

type Direction = Up, Down, Left, Right.


-- @type Point
let origin = Point(0, 0).


fn _printPoint point = do(
    Output::printString("("),
    Output::printInt(Point:x(point)),
    Output::printString(", "),
    Output::printInt(Point:y(point)),
    Output::printString(")"),
).

-- Apply a series of movements to a starting point.
-- @type Point, List(Direction) -> Point
fn travel point directions =
    -- Moves the provided point in the specified direction.
    -- @type Direction, Point -> Point
    fn move direction point =
        let oldX = Point:x(point),
        let oldY = Point:y(point),

        Direction:match(
            direction,
            -- Up
            Point:updateY(point, Int::inc(oldY)),
            -- Down
            Point:updateY(point, Int::dec(oldY)),
            -- Left
            Point:updateX(point, Int::dec(oldX)),
            -- Right
            Point:updateX(point, Int::inc(oldX)),
        ).
    
    List::fold(directions, point, &move).

fn main =
    let travelPath = [Up(), Left(), Left(), Up(), Right(), Down(), Up()],
    let travelDestination = travel(origin, travelPath),

    do(
        List::dispose(travelPath),
        _printPoint(travelDestination)
    ).
```