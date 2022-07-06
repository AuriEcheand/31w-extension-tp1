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
