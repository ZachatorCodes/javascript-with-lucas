const button = document.getElementById("button")
const form = document.getElementById("form-input")

button.addEventListener("click", (event) => {
  event.preventDefault()
  const formValue = form.value
  fetch(`https://www.cheapshark.com/api/1.0/games?title=${formValue}`)
    .then(r => r.json())
    .then(games => {
      console.log(games)
    })
})