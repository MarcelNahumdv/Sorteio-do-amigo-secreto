let listadenomes = []

function adcnomes () {

    let nomes = document.querySelector(`input`).value;
    listadenomes.push(nomes)
    let adc = document.getElementById(`listaAmigos`);
    adc.innerHTML = listadenomes

};

function mostrarvalor  () {

    console.log(listadenomes)

};

function amigosorteado() 
{
    if (listadenomes.length === 0) 
    { 
        alert ("por favor insira um valor valido😒")
        document.getElementById("resultado").
        innerHTML = ("lista vazia😒 ! por favor insira novos nomes.👍 ");
        return;
    }
        let aleatorio = Math.floor(Math.random() * listadenomes.length);
        let escolhido = listadenomes[aleatorio];
        document.getElementById("resultado").
        innerHTML = ("O escolhido foi😍: " + escolhido);
};

    

function limparcampo () {

    let clean = document.querySelector(`input`);
    clean.value = "";
    
};

function newgame () 
{   
    
    amigosorteado() 
    let adc = document.getElementById(`listaAmigos`);
    adc.innerHTML = listadenomes
    listadenomes = []
    limparcampo()
    
    
};




