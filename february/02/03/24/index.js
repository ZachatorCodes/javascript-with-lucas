const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const htmlBody = document.querySelector("body");

const newH4 = document.createElement("h4");
days.forEach((day) => {
  newH4.textContent = day;
  htmlBody.append(newH4);
});

fetch("https://www.cheapshark.com/api/1.0/stores")
  .then(response => response.json())
  .then(stores => {
    stores.forEach(store => {
      const newH3 = document.createElement("h3");
      newH3.textContent = store.storeName
      htmlBody.append(newH3)
    })
  })