let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

// console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let saved = " " + count + " -"
    saveEl.textContent += saved
    countEl.textContent = 0
    count = 0
}