/*
1. creo di div cella con numerazione da 1 a 100
2. al click dell'utente sulla cella si colora di azzurro grazie alla classe:
    - appare in console il numero
*/

const gridContainer = document.getElementById('grid-container');
console.log('Ho selezionato l\'elemento', gridContainer);

for(let i = 1 ; i <= 100 ; i++){
    console.log('I numeri all\'interno delle celle sono', i);

    // creo le mie celle
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.append(cell);

    //mostro all'interno il contenuto
    cell.innerHTML = [i];

    // aggiungo il click
    cell.addEventListener('click',

    function () {
        if (cell.classList.contains('clicked')){
            cell.classList.remove('clicked');
        }
        else{
            cell.classList.add('clicked');
            console.log('La cella cliccata contiene il numero', i);
        }
    }

    );

}