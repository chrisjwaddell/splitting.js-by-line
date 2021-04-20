

This is a little add-on for the Splitting.js text library to do animations by line characters.



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


<script>
    setTimeout(() =>{
        splittingByLine()
    },1000)
</script>



