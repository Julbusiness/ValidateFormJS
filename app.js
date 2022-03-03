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