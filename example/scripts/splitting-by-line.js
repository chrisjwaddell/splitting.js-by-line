function splittingByLine() {

    const elAllSplitting = document.querySelectorAll('[data-splitting]')
    let elWords
    let elChars

    let line = 0
    let linechar = 0
    let linechartotal = 0
    var linecharmax = 0

    elAllSplitting.forEach((txt, txtLineNumber) => {
        line = 0
        linechar = 0
        elWords = txt.querySelectorAll('.word.words')



        for (let w = 0; w < elWords.length; w++) {
            if (line !== Number(elWords[w].style.getPropertyValue("--line-index"))) {
                line++
                linechar = 0
            }
            if (!linechar) {
                linechartotal = document.querySelectorAll(`.word.words[style*="--line-index:${line}"] .char`).length
            }

            elChars = elWords[w].querySelectorAll('.char')
            for (let c = 0; c < elChars.length; c++) {
                elChars[c].style.setProperty("--linechar-index", linechar)
                elChars[c].style.setProperty("--line-index", line)
                elChars[c].style.setProperty("--linechar-total", linechartotal)
                elChars[c].classList.add("sbl")
                linechar++

                if (linechar > linecharmax) {
                    linecharmax = linechar
                }

            }

        }

        txt.style.setProperty("--linechar-max", linecharmax)
    })


    elAllSplitting.forEach((txt) => {
        txt.classList.add("sbl1");
    })

    setTimeout(() => {
        elAllSplitting.forEach((txt) => {
            txt.classList.add("sbl2");
        })
    }, 200)

}
