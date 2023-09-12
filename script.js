// Votre console affichera beaucoup d'erreurs c'est tout à fait normal si vous suivez l'ordre synchrone des exercices à la fin vous ne devriez plus avoir d'erreur.

// Exercice 1
// creer une variable 

let firstname = "Dorine";
let lastname = "Uwabiduhaye";


// Ne touchez pas à ceci
document.querySelector("h1").textContent = `Bonjour ${firstname} ${lastname}`;

// Exercice 2
// creer une varoiable age

let age = 30;

// Ne touchez pas à ceci
document.querySelector(
  "p"
).textContent = `Tu t'appelles donc ${firstname} et tu as ${age} ans 😊 si mes calculs sont justes tu es né en ${
  2023 - age
}`;
// Exercice 3
 
let year = 2023;
let birthYear = year - age;

console.log("Année de naissance : " + birthYear);

// Exercice 4

let user = [age,year,birthYear];
console.log(user);

// Ne touchez pas à ceci
user.forEach((infoUser) => {
  switch (infoUser) {
    case firstname:
      document.getElementById("firstname").textContent = `Salut ${firstname} !`;
      break;
    case lastname:
      document.getElementById(
        "lastname"
      ).textContent = `Bonjour Monsieur/Madame ${lastname} !`;
      break;
    case age:
      document.getElementById(
        "age"
      ).textContent = `Quel âge as-tu ? ${age} ans`;
      break;
    case year:
      document.getElementById(
        "year"
      ).textContent = `On est toujours en ${year}`;
      break;
    case birthYear:
      document.getElementById(
        "birthYear"
      ).textContent = `Tu es donc né en ${birthYear}`;
      break;
    default:
      console.log("Oups il y a une erreur");
      break;
  }
});
// Exercice 5
 let backgroundColor = "orange";
console.log("la couleur initiale est " + backgroundColor);

// Ne touchez pas à ceci
document.body.style.backgroundColor = backgroundColor;
// Insérez votre réassignation de backgroundColor ici

backgroundColor = "yellow";
console.log("la nouvelle couleur est " + backgroundColor);


document.body.style.backgroundColor = backgroundColor;

// Exercice 6
// Insérez votre code ici


let car = {
  brand: "Tesla",          // (String)
  model: "modelS",           // (String)
  yearConstruct: 2022,      // (Number)
  color: "Blue",            // (String)
  image: "https://www.istockphoto.com/fr/photo/voiture-noire-sur-une-route-de-montagne-gm1056576936-282367410?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Ffr%2Fphotos%2F49gi04Retc4&utm_term=Royaume-Uni%3A%3A%3A",
};

// Ne touchez pas à ceci
document.getElementById(
  "firstItem"
).textContent = `La marque de ta voiture : ${car.brand}`;
document.getElementById(
  "secondItem"
).textContent = `Le modèle de ta voiture : ${car.model}`;
document.getElementById(
  "thirdItem"
).textContent = `Ta voiture a été contruite en : ${car.yearConstruct}`;
document.getElementById(
  "fourthItem"
).textContent = `Ta voiture est de couleur : ${car.color}`;
document.getElementById("car").src = car.image;

// Exercice 7


let buttons = document.querySelectorAll('button');


let cat = document.getElementById('cat');





// Ne touche pas à ceci
const catURL = [
  "https://s1.1zoom.me/big0/812/Cats_Glance_Kittens_558640_1280x720.jpg",
  "https://img3.wallspic.com/crops/4/8/6/4/94684/94684-chat_siberien-chat_siamois-chaton-chat_persan-chat-1280x720.jpg",
  "https://chatfaitdubien.fr/wp-content/uploads/2016/09/chaton.jpg",
];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Photo 1":
        cat.src = catURL[0];
        break;
      case "Photo 2":
        cat.src = catURL[1];
        break;
      case "Photo 3":
        cat.src = catURL[2];
        break;
      default:
        console.log("Erreur");
        break;
    }
  });
});

// Exercice 8
 
let outputElement = document.getElementById('output');

let paragraphElement = document.createElement('p');
paragraphElement.innerHTML = "Ceci est un paragraphe de texte.";


let imageElement = document.createElement('img');
imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png";

// Exercice 9



let tab = ["valeur1","valeur2","valeur3","valeur4","valeur5"];

let listOutputElement = document.getElementById('listOutput');

tab.forEach((value) => {
  listOutputElement.innerHTML += "<li>" + value + "</li>";
});



// Exercice 10
// Ne touchez pas au tableau
const icons = [
  "cat-solid",
  "dog-solid",
  "dragon-solid",
  "fish-solid",
  "hippo-solid",
  "horse-solid",
  "otter-solid",
  "paw-solid",
  "shrimp-solid",
];
let logoElement = document.getElementById('logo');

let longueurIcons = icons.length - 1;

let randomNumber = Math.floor(Math.random() * (longueurIcons));


let randomIconPath = `images/${icons[randomNumber]}`;

logoElement.src = randomIconPath;

// Exercice 11 : Optionnel




const iconselect = document.getElementById('iconSelect');
const changeIconButton = document.getElementById('changeIcon');
const iconimage= document.getElementById('iconImage');




function changerIcone() {
  const selectedValue = document.getElementById("iconselect").value;
  console.log("Icone selectionnee :" + selectedValue);
  let iconPath="";

  if(selectedValue == "iconImage.src"){
    iconPath = `./images/${selectedValue}.svg`
    iconimage.src = iconPath
  }
 
}

changeIconButton.addEventListener("click", changerIcone);
