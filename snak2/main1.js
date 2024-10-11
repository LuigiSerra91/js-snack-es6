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
        points : 0,
        fouls : 0,
        
    },
    {
        nameTeam : 'Roma',
        points : 0,
        fouls : 0,
        
        
    },
    {
        nameTeam : 'Cagliari',
        points : 0,
        fouls : 0,
        
        
    }
]



let namesArray = [];
for (i = 0; i < teams.length; i++){
    let team = teams[i];
    namesArray.push(team.nameTeam);
    
};

//let newPoints = teams.puntiFatti;
for (i = 0; i < teams.length; i++){
    let randomPoints = Math.floor(Math.random() * 20);
    
    teams.points = randomPoints;
    //console.log(teams);
    
};


let foulsArray = [];
for (i = 0; i < teams.length; i++){
    let randomFouls = Math.floor(Math.random() * 20);
    teams.fouls = randomFouls;
    foulsArray.push(randomFouls)
    //console.log(teams);
};



const finalArray = namesArray.concat(foulsArray);
console.log(finalArray);


