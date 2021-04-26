# Splitting.js By Line
This is a little add-on for the Splitting.js text micro-library so you can do animations by line and character together.

![Splitting by line](https://github.com/chrisjwaddell/splitting.js-by-line/blob/main/splitting.js-by-line.gif)

Splitting.js-by-line adds CSS variables *--linechar-index* and *--line-index* to each character. This allows you to do slightly different animations depending on the line and character position.
If a character is 50th in the string, it may be 8th on the second line.
By changing the *transition-delay* in CSS, you can do things like this:
```
transition-delay: calc(calc(var(--linechar-index) * 0.01s) + calc(var(--line-index) * 0.005s));
```

Add in a class
```
.char.sbl {
    transform: translateY(-225px);
    transition-delay: calc(calc(var(--linechar-index) * 0.01s) + calc(var(--line-index) * 0.008s));
    transition-duration: 1.8s;
}
```


The Splitting.js code needs to split by line, then character:
```
var s = Splitting({
	target: "[data-splitting]",
    by: 'lines'
}).forEach(s => {
	Splitting({
        	target: s.words,
            by: 'chars'
	})
});
```


Add the script to your HTML after splitting.js:
```
<script src="./scripts/splitting-by-line.js"></script>
```


To trigger the animation call the *splittingByLine()* function. Call this function in things like a button event or timeout to create a delay when the page loads:
```
<script>
    setTimeout(() =>{
        splittingByLine()
    },1000)
</script>
```




### References
[Splitting.js on Github](https://github.com/shshaw/Splitting)\
[Splitting.js homepage](https://splitting.js.org/guide.html)




