delay(5000);
console.log('ok');

function delay(ms) {
    let end = Date.now() + ms; //define o tempo
    while(Date.now() < end) {} //espera aqui até dar o tempo
}