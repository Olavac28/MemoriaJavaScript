{
    let n1 = 1; //msm coisa que var, mas só funciona dentro do msm bloco
    var n2 = 2;
    console.log(n1);
    console.log(n2);
}

{
    //console.log(n1); //nn vai funcionar
    console.log(n2);
}

{
    let n3 = 3;
    {
        console.log(n3);
    }
}