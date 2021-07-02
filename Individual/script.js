var soma = [600, 111, 1000, 20];
var total = 0
var nomes = ["Danillo", "Matheus", "Israel", "Filipe", "Victor"]

function Nomes() {
    document.getElementById('text2').innerHTML = nomes
}

function Numeros() {
    for(var i =0; i < soma.length; i++){
        total = total + soma[i]
    }
    document.getElementById('text1').innerHTML = total
}