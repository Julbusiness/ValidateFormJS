// Je déclare mes constantes en leur applicant les éléments du dom
const inpUser = document.querySelector('.form-group:nth-child(1) input');
const inpMail = document.querySelector('.form-group:nth-child(2) input');
const inpMdp = document.querySelector('.form-group:nth-child(3) input');
const inpConfirm = document.querySelector('.form-group:nth-child(4) input');
const allImg = document.querySelectorAll('.icon-verif');
const allSpan = document.querySelectorAll('span');
const allLine = document.querySelectorAll('.line div');

// J'écoute l'input user (je lui demande d'avoir entre 3 et 25 caracteres)
inpUser.addEventListener('input', (e) => {

  if(e.target.value.length >= 3) {
    allImg[0].style.display = "inline";
    allImg[0].src = "ressources/check.svg";
    allSpan[0].style.display = "none";
  }
  else {
    allImg[0].style.display = "inline";
    allImg[0].src = "ressources/error.svg";
    allSpan[0].style.display = "inline";
  }
}) 

// j'écoute l'input Mail (je lui demande de vérifier les espaces et les signes speciaux avec une regex)
inpMail.addEventListener('input', (e) => {

  const regexMail = /\S+@\S+\.\S+/;

  if(e.target.value.search(regexMail) === 0) {
    allImg[1].style.display = "inline";
    allImg[1].src = "ressources/check.svg";
    allSpan[1].style.display = "none";
  } else if(e.target.value.search(regexMail) === -1) {
    allImg[1].style.display = "inline";
    allImg[1].src = "ressources/error.svg";
    allSpan[1].style.display = "inline";
  }

})

// création du Mdp

let valueInp;

// Regex pour vérifier les caracteres, l'accent circonflexe veut dire tout ce qui n'est pas çà. Ici tout ce qui n'est pas compris entre a et z minuscule, puis majuscule, puis les chiffres entre 0 et 9.
const specialChar = /[^a-zA-Z0-9]/

// Regex - Tout ce qui se trouve entre a et Z, le i veut dire 'insensitive' a la casse donc accepte les minuscules et les majuscules.
const alphabet = /[a-z]/i;

// Regex pour les chiffres
const figures = /[0-9]/;

let objValidation = {
  symbol : 0,
  letter : 0,
  figures : 0,
}

inpMdp.addEventListener('input', (e) => {

  valueInp = e.target.value;

  if(valueInp.search(specialChar) !== -1){
    objValidation.symbol = 1;
  }
  if(valueInp.search(alphabet) !== -1){
    objValidation.letter = 1;
  }
  if(valueInp.search(figures) !== -1){
    objValidation.figures = 1;
  }

  // console.log(objValidation);

  // on met en place le système de suppression de carcateres (lorsque l'on supprime un caractere une nouvelle verification est faite)
  if(e.inputType = 'deleteContentBackward') {
    if(valueInp.search(specialChar) === -1){
      objValidation.symbol = 0;
    }
    if(valueInp.search(alphabet) === -1){
      objValidation.letter = 0;
    }
    if(valueInp.search(figures) === -1){
      objValidation.figures = 0;
    }
    
    // console.log(objValidation); 

  }

  // j'initialise ma variable test
  let testAll = 0;
  for(const property in objValidation) {
    if(objValidation[property] > 0){
      testAll++;
    }
  }
  if(testAll < 3){
    allSpan[2].style.display = "inline";
    allImg[2].style.display = "inline";
    allImg[2].src = "ressources/error.svg";
  } else {
    allSpan[2].style.display = "none";
    allImg[2].src = "ressources/check.svg"
  }

  // force du mot de passe
  if(valueInp.length <= 6 && valueInp.length > 0){
    allLine[0].style.display = 'block'; // Seul la premiere ligne apparait (block)
    allLine[1].style.display = 'none';
    allLine[2].style.display = 'none';
  }
  else if(valueInp.length > 6 && valueInp.length <= 9){
    allLine[0].style.display = 'block'; // 1ere ligne apparait (block)
    allLine[1].style.display = 'block'; // 2eme ligne apparait (block)
    allLine[2].style.display = 'none';
  }
  else if(valueInp.length > 9) {
    allLine[0].style.display = 'block'; // 1ere ligne apparait (block)
    allLine[1].style.display = 'block'; // 2eme ligne apparait (block)
    allLine[2].style.display = 'block'; // 3eme ligne apparait (block)
  }
  else if(valueInp.length === 0){
    allLine[0].style.display = 'none'; // on repasse toutes les lignes en 'none'.
    allLine[1].style.display = 'none';
    allLine[2].style.display = 'none';

  }

})

// confirmation de mot de passe
inpConfirm.addEventListener('input', (e) => {

  if(e.target.value.length === 0) {
    allImg[3].style.display = "inline";
    allImg[3].src = "ressources/error.svg";
  }
  else if(e.target.value === valueInp){
    allImg[3].style.display = "inline";
    allImg[3].src = "ressources/check.svg";
  } else {
    allImg[3].style.display = "inline";
    allImg[3].src = "ressources/error.svg";  }
})