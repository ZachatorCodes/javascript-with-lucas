// CheapShark API - https://apidocs.cheapshark.com/#intro

// First, we grab the button element from our HTML file.
const button = document.getElementById("button")

// Then, we go ahead and grab the input element from our HTML file. 
const textInput = document.getElementById("text-input")


button.addEventListener("click", (event) => {
  // We always have to use event prevent default when submitting a form, to prevent the page from reloading.
  event.preventDefault()

  // Then, we grab the value of the text input from our input element.
  const textInputValue = textInput.value

  // Then, we use String interpolation with the API endpoint to pass that value.
  fetch(`https://www.cheapshark.com/api/1.0/games?title=${textInputValue}`)
    .then(r => r.json()) // Convert the response to JSON
    .then(games => {
      console.log(games) // Mess with the converted data
    })
})

// For information on game search API end point, check out https://apidocs.cheapshark.com/#e3d7f1f0-f7a4-b36a-587a-6514a40f4d88.

// For an example of what we're building, check out https://zachatorcodes.github.io/phase-1-project/