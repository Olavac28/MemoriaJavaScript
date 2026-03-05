//maneira 1
delay(5000);
console.log('ok');
function delay(ms) {
    let end = Date.now() + ms; //define o tempo
    while(Date.now() < end) {} //espera aqui até dar o tempo
}

//maneira 2 e mais simples
setTimeout(() => {
    console.log("ok2")
}, 5000)