---
theme: default
title: Jill - a functional programming language for Nand2Tetris
defaults:
  layout: statement
transition: fade
---

# Slide 1

The frontmatter of this slide is also the headmatter

---

<!-- TODO: replace with diagram -->

!["abstraction path"](./.dev/img/nand2tetris-structure.jpg)


---

# Bullet points test

<v-clicks>

- point one
- point two
- third point
- hehe

</v-clicks>

---
layout: quote
---

# Quote layout test

> Some of these features...<br>
> Make the writing of Jack programs a bit harder;<br>
> Make the writing of a Jack compiler much easier.

---
layout: fact
---

# ZAŠTO

POBOGU


--- 

# Literals

<v-click>

````md magic-move


```jill
-- Int
42
```


```jill{4-}
-- Int
42

-- Bool
False
```


```jill{7-}
-- Int
42

-- Bool
False

-- String
"Hello, there"
```


```jill{10-}
-- Int
42

-- Bool
False

-- String
"Hello, there"

-- List
[3, 8, 11, 5, 7]
```

````

</v-click>


---

# Variable

<v-click>

```jill
counter
```

</v-click>



---

# Function call

<v-click>

````md magic-move

```jill
checkUsername(username)
```

```jill{4-}
checkUsername(username)


Output::printString("Player 1")
```
````

</v-click>




---
layout: default
---


# do

<v-click>

```

It took you {totalAttempts} attempts to guess the number!

```

</v-click>

<br>

<v-click>



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

</v-click>

---

<v-clicks>

- variables, functions
- immutable variables
- no loops
- types
- tail-call optimization
 
</v-clicks>

<!-- 

most of the stuff was straight-forward


- [click] variables, functions (like in Jack) 
- [click] immutable variables (just don't implement mutation) 
- [click] no loops (just don't add them) 
- [click] types (ctor functions, tagged unions) 
- [click] tail call (first idea worked, tough execution)

-->

---

# Take 0: 

## function pointer

---

`<possible fn ptr screenshot>`

<!-- tipically used -->

---

`<hack VM screenshot>`

<!-- 
- Hack has separate ROM/RAM (code/data)
- would require VM/Hack change :/
 -->

---

# Take(s) 1: 

## dynamic call

---

## `call Output.printString 1`

<!-- full function name has to be explicit in fn call -->

---

`<hack VM invalid call error screenshot>`

---

# Take 2: 

## monomorphization

---
layout: two-cols
---


```jill
List::map(nums, &addTwo)



			.
			.
			.




List::map(nums, &inHalf)



			.
			.
			.




List::map(nums, &double)
```

::right::

<v-click>

```{all|1,4|10,13|18,21|all}
function List.map1 0
	. . .

	call Module.addTwo 1
	
	. . .



function List.map2 0
	. . .
	
	call Module.inHalf 1
	
	. . .


function List.map3 0
	. . .
	
	call Module.double 1
	
	. . .
```

</v-click>

<!-- 

[click:5]

- difficult at best
- lots of instructions (bad for Hack)
- can't work if we don't know all used fns

 -->

---

# Take 3: 

## dynamic dispatch

---
layout: center
---

```
if fid == 0 then
	call Int.min 2

else if fid == 1 then
	call Int.max 2

else if fid == 2 then
	call Bool.and 2

else if fid == 3 then
	call Bool.not 1

	. . .
```

<!-- 

- each fn represented with a fid => enables dyn call
- limited to 1-arity fns (or multiple dispatchers)
- can't capture data when returning fn from fn

 -->

---

# Take 4: 

## dynamic dispatch + closure


<!-- 

- closure with fid + captures (and more)
- solves problem with returning fn
- save fn arity => multi-arg dispatch from single dispatcher

 -->

---

# 🎉

---

![repo](./.dev/img/jillc-repo.png)

---

![lang tour](./.dev/img/lang-tour.png)

<!-- if they want to use Jill (lang tour, examples) -->

---

![examples](./.dev/img/examples.png)

<!-- if they want to use Jill (lang tour, examples) -->

---

![source code](./.dev/img/source-code.png)

<!-- if they want to work on Jill (source code, ideas for features) -->

---

![feature ideas]()

<!-- if they want to work on Jill (source code, ideas for features) -->

---
layout: end
---

`<insert linktree qr>`

<!-- thx & links (repo, mail, presentation) -->