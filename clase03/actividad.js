
const fs = require('fs');

const date = new Date(Date.now());

fs.writeFile('archivo.txt', `${date}`, (err)=>{
    if(err) return console.log(err);
    console.log('sucess');

    fs.readFile('archivo.txt', 'utf8', (err, data) =>{
        if (err) return console.log(err);

        console.log(data);
    })
    console.log('success');
})

console.log('hola');