console.log('its works');


/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/
const printBike = document.getElementById('bike')

const bike = [
    {
        name : 'yellow bike',
        weight : 60,
        
    },
    {
        name : 'Red bike',
        weight : 100,
        
    },
    {
        name : 'pink bike',
        weight : 70,
        
    }
]

 // Funzione per trovare la bici con il peso minore
 
 printBike.innerHTML = bike[0].weight