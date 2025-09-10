function f(g) { //declaração da função f()
    g(); //chama a função g() que é o parametro da função
}

f(function() { //chama a função f() que tem de parametro uma função
    console.log('função passada por parametro');
});