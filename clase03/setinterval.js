
const temporizador = () => {
    console.log('iniciamos temporizador');
    let counter = 0;
    setInterval(()=>{
        console.log(++counter);
    }, 2000)
}

console.log('tik tik');
temporizador();
console.log('fin');