let main_cont = document.getElementById("speedTypingTest")

let txt_inp = document.getElementById("quoteInput")
txt_inp.value = ""
let quote = document.getElementById("quoteDisplay")

let timer = document.getElementById("timer")

let sbmt = document.getElementById("submitBtn")
let rst = document.getElementById("resetBtn")

let rslt = document.getElementById("result")

let spin_elmnt = document.getElementById("spin")

let p = 0

function load_p(rsp) {
    quote.textContent = rsp
}
let get_quote = function() {
    let url = "https://apis.ccbp.in/random-quote"
    let options = {
        method: "GET",
    }
    fetch(url, options).then(function(rsp) {
            return rsp.json()
        })
        .then(function(rspp) {
            load_p(rspp.content)
        })
}

get_quote()

txt_inp.addEventListener("click", function() {
    // spin_elmnt.classList.remove("d-none")
    let time = setInterval(function() {
        p = p + 1
        timer.textContent = p
    }, 1000)

    sbmt.addEventListener("click", function() {
        clearInterval(time)
        if (quote.textContent === txt_inp.value) {
            rslt.textContent = "You have typed in " + p + "seconds"
            rslt.style.color = "green"
        } else if (txt_inp.value === "") {
            alert("Enter valid text")
        } else if (quote.textContent !== txt_inp.value) {
            rslt.textContent = "Check the sentence again"
            rslt.style.color = "red"
        }
        console.log(txt_inp)
    })

    rst.addEventListener("click", function() {
        spin_elmnt.classList.add("d-none")
        quote.textContent = spin_elmnt.textContent
        get_quote()
        p = 0
        timer.textContent = 0
        txt_inp.value = ""
        rslt.textContent = ""
        clearInterval(time)

        // quote.textContent = spin_elmnt
    })

})