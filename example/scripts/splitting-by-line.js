function splittingByLine() {

const elAllSplitting = document.querySelectorAll('[data-splitting]')
let elWords
let elChars

let line = 0
let linechar = 0


elAllSplitting.forEach((txt) => {
  // debugger
  line = 0
  linechar = 0
  elWords = txt.querySelectorAll('.word')
  console.log(elWords)
  // debugger
  for (let w = 0; w < elWords.length; w++) {
    if (line !== Number(elWords[w].style.getPropertyValue("--line-index"))) {
      line++
      linechar = 0
    }
    // console.log("line - " + line + ", w - " + w + ", propertyvalue - " + elWords[w].style.getPropertyValue("--line-index"))

    elChars = elWords[w].querySelectorAll('.char')
    for (let c = 0; c < elChars.length; c++) {
      elChars[c].style.setProperty("--linechar-index", linechar)
      elChars[c].style.setProperty("--line-index", line)
      elChars[c].classList.add("ready")
      linechar++
    }
  }
})

}