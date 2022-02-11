const hp_btn = document.getElementById("hp_btn");
const hp_name = document.getElementById("hp_name");
const hp_result = document.getElementById("hp_result");
const hp_house = document.querySelector(".house");

hp_btn.addEventListener("click", getRandomHp);

// Get Random Harry Potter (HP) Character from API
function getRandomHp() {
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then((res) => res.json())
    .then((data) => {
      // Call random key generator function
      const randKey = getRandKey(data);

      // Assign variables to data object properties
      const hpName = data[randKey].name;
      const hpImg = data[randKey].image;
      const hpHouse = data[randKey].house;

      // Run random HP character function again if encountered hpImg or hpName are empty
      if (hpImg == 0 || hpName == 0) {
        getRandomHp();
      } else {
        // Display HP character name and image on HTML
        hp_name.textContent = hpName;
        hp_result.innerHTML = `<img src=${hpImg} alt=${hpName} />`;
        hp_house.innerHTML = hpHouse.toUpperCase();
      }
    });
}

// Generate random key number
function getRandKey(data) {
  let randKey = parseInt(Math.floor(Math.random() * data.length + 1));
  return randKey;
}
