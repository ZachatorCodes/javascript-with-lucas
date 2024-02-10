// CheapShark API - https://apidocs.cheapshark.com/#intro

// First, we grab the button element from our HTML file.
const button = document.getElementById("button")

// Then, we go ahead and grab the input element from our HTML file. 
const textInput = document.getElementById("text-input")


button.addEventListener("click", (event) => {
  event.preventDefault()
  const textInputValue = textInput.value
  fetch(`https://www.cheapshark.com/api/1.0/games?title=${formValue}`)
    .then(r => r.json())
    .then(games => {
      console.log(games)
    })
})