console.log('its works');


/* 
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

const teams = [
    {
        nameTeam: 'Atalanta',
        points : randomNumber(1, 100),
        fouls : randomNumber(1, 100),
        
    },
    {
        nameTeam : 'Roma',
        points : randomNumber(1, 100),
        fouls : randomNumber(1, 100),
        
        
    },
    {
        nameTeam : 'Cagliari',
        points : randomNumber(1, 100),
        fouls : randomNumber(1, 100),
        
        
    }
]

function randomNumber(min ,max ) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let teamsFouls = []
for (let i = 0; i < teams.length; i++) {;
    teamsFouls.push(teams[i].nameTeam, teams[i].fouls)
}
console.log(teamsFouls);






