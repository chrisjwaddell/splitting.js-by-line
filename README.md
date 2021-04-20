# Splitting.js By Line

This is a little add-on for the Splitting.js text library so you can do animations by line and characters.

It adds CSS variables *--linechar-index* and *--line-index* to each character. This allows you to do slightly different animations depending on the line and character position. 
If a character is 50th in the string, it may be 8th on the second line.
By changing the *transition-delay* in CSS, you can do things like this:
```
transition-delay: calc(calc(var(--linechar-index) * 0.02s) + calc(var(--line-index) * 0.04s));
```


The Splitting.js code :
```
var s = Splitting({
	target: "[data-splitting]",
        by: 'lines'
}).forEach(s => {
	Splitting({
        	target: s.words,
            	by: 'chars',
            	force: true
	})
});
```


Add the script to your HTML:
```
<script src="./scripts/splitting-by-line.js"></script>
```


To trigger the animation call the splittingByLine() function. Call this function in things like a button event or timeout to create a delay when the page loads:
```
<script>
    setTimeout(() =>{
        splittingByLine()
    },1000)
</script>
```


### References
https://github.com/shshaw/Splitting
https://splitting.js.org/guide.html#get-started



