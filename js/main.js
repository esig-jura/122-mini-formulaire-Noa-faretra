/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');

//Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#mdp');
const txtMDPConfirm = document.getElementById('mdpC');
console.log(formulaire, txtMDP,txtMDPConfirm);

//Ecouter l'envoie du formulaire

formulaire.addEventListener('submit',function Coucou (event){
    //sa stop l'envoie du formulaire
    event.preventDefault();

    //recuper les valeur du mdp et de la confirmation
    let mdp= txtMDP.value;
    let mdpConfirm = txtMDPConfirm.value;

    //tester si les mdp son identiques
    if (mdp !== mdpConfirm) {
        alert("les mots de passe sont différents ");
    }
    else {
        alert('Comptes crée avec succès !');
        //envoie le formulaire
        formulaire.submit();
    }
});