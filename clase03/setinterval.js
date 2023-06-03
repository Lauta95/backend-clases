
const temporizador = () => {
    console.log('iniciamos temporizador');
    let counter = 0;
    const timer = setInterval(()=>{
        console.log(++counter);
        if(counter > 5) clearInterval(timer)
    }, 2000)
}

console.log('tik tik');
temporizador();
console.log('fin');