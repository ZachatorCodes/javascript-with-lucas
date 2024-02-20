// LINK TO FREE APIS: https://github.com/public-apis/public-apis

const htmlBody = document.querySelector("body")
const button = document.getElementById("button")

document.addEventListener("DOMContentLoaded")

button.addEventListener("click", handleClick)

function handleClick(event) {
  console.log(event)
  console.log("I've been clicked")
}

fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      const h1 = document.createElement("h1")
      h1.textContent = book.name
      htmlBody.append(h1)
    })
  })
  
// Main ways to loop through an Array

// 1. For Each method
// books.forEach(book => {
//   console.log(book)
// })

// 2. For..of loop
// for (const book of books) {
//   console.log(book)
// }

// 3. For loop
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i])
// }

/**
 * 3 Main Parts of a For Loop
 * 1. Initialization 
 *    let i = 0;
 * 
 * 2. Condition
 *    i = books.length;
 * 
 * 3. Incrementor
 *    i++
 */   