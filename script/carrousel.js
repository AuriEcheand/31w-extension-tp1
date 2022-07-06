/**
 * Fonction IIFE qui permet de contrôler l'affichage du carrousel
 * Auteur : Auristela Echeverria
 * Date de dernière modification : 5 juillet 2022
 * 
 */


 (function(){
    console.log('Début du carrousel')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture')
    let elmCarrousel__radio = document.querySelector('.carrousel__radio')
    console.log(elmGalerieImg[0].getAttribute('src'))
    let index = 0 // L'index qui permettra d'indexer les images du carrousel et les radios bouton
    for (const img of elmGalerieImg){
        ajouter_elmImg(img)
        ajouter_elmRadio()
        // écouteur sur la galerie pour ouvrir le carrousel
        img.addEventListener('mousedown', function(){
            elmCarrousel.classList.add('carrousel__ouvrir') 
    }) 
    }
  /**
 * Écouteur pour fermer le carrousel
 * 
 */
    elmCarrousel__fermeture.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel__ouvrir') 
    })
  /**
 * Ajouter un img créé dynamiquement dans le conteneur elmCarrousel__figure
 * 
 * @param {ChildNode} img   Une image de la galerie
 */
    function ajouter_elmImg(img){
        let elmImg = document.createElement('img') // création d'un élément img
        elmImg.classList.add('carrousel__figure__img') // ajout d'une classe css
        elmImg.setAttribute('src', img.getAttribute('src')) // on récupère l'adresse URL de l'image de la galerie
        elmCarrousel__figure.appendChild(elmImg) // ajouter l'élément img dans le carrousel
        elmImg.dataset.index = index // on index l'élément img pour pouvoir l'associé au bon radio bouton
    }
  
 

