// WARM-UP: Loop through all of the objects inside the objects array, display the name of everybody who's favorite color starts with the letter 'b'.

const objects = [
  {
    name: "Frank",
    favoriteColor: "Blue",
  },
  {
    name: "Doodle-Pie",
    favoriteColor: "Black",
  },
  {
    name: "Bahumbug",
    favoriteColor: "Red",
  },
  {
    name: "Spungus",
    favoriteColor: "Green",
  },
  {
    name: "Splong",
    favoriteColor: "Black",
  },
  {
    name: "Gravion",
    favoriteColor: "Black",
  },
  {
    name: "Plungostos",
    favoriteColor: "Yellow",
  },
  {
    name: "Uitriny",
    favoriteColor: "Green",
  },
];

const htmlBody = document.querySelector("body");

const filteredObjects = objects.filter((object) => object.favoriteColor[0] === "B");

filteredObjects.forEach((person) => {
  const newH3 = document.createElement("h3");
  newH3.textContent = person.name;
  htmlBody.appendChild(newH3);
});
