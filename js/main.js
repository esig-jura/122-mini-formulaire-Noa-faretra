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
formulaire.addEventListener('submit',(event)=>{
    //sa stop l'envoie du formulaire
    event.preventDefault();
    let erreurs = [];

    if(txtMDP.value.length <3){
        erreurs.push('Le mot de passe doit faire au moin 3 caractère');

    }
    if (txtMDP.value !== txtMDPConfirm.value) {
        erreurs.push('les mots de passe sont différents');
    }

    //tester si les mdp son identiques
    if (erreurs.length > 0) {
        let msg = '';
        //pour chaque erreur dans le tableau
        for (let err of erreurs) {
            //crée un novuelle ligne (\n) our chaque erreur
            msg += ' \n - ' + err;
        }
        alert(msg);
        //stop de la fonction
        return;
    }


alert('Comptes crée avec succès !');
//envoie le formulaire
formulaire.submit();
});