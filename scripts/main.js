function Click(){
    document.getElementById("tanks").innerHTML ="Obrigado por clicar ";;
    //alert("Obrigado por dar esse Click ")
}

function redire() {
    window.open("https://www.youtube.com/");//abre o site em uma nova guia 
    //window.location.href="https://www.youtube.com/";   //abre na mesma guia 
}

function passar() {
    document.getElementById("pase").innerHTML="Valeu!!"
    
}

function voltar() {
    document.getElementById("pase").innerHTML="Passe cursor aqui!"
}
function passarr(elemento) {
    elemento.innerHTML="não era necessario mudar o nome da function pois quando estou utilizando esse metodo ele funcionará independente do id do elemento "
    
}
function voltarr(elemento) {
    elemento.innerHTML="outra forma de fazer "
}

function load() {
    alert("carregada ")
}


function change(elemento){//consegue coletar o valor do elemento.
    console.log(elemento.value)
}
/*
function soma(n1,n2) {
    return n1 +n2;
}
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome,novo_nome);
}


function validaIdade(idade) {
    var validar;
    if (idade>=18) {
        validar=true;
    } else {
        validar = false;
    }
    return validar;
}
var idade =prompt("Qual a sua idade ? ");
console.log(validaIdade(idade));

alert(soma(5,18));
alert(setReplace("vai Japão", "Japão", "Brasil"));
*/
/*

var d = new Date();
alert(d.getHours());
*/

/*
var cont;
for (cont = 0; cont <= 5; cont++) {
    console.log(cont);
    
}
*/

/*
var count = 0;
while (cont<=5) {
    console.log(count);
    count++;
}


*/



/*
var idade =prompt("Qual sua idade ?");

if (idade >=18) {
    alert("Maior de idade");
} else{
    alert("Menor de idade");
}

*/





//var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", car:"roxa"}];
//console.log(frutas.nome);
//alert(ftutas.cor);






//dicionario 
//var fruta ={ nome:"maça", cor:"vermelho"};
//console.log(fruta.nome);








//var lista = ["maça","pera","laranja"];
//lista.push("uva");//adiciona 
//lista.pop("maça");//remove

//console.log(lista[1]);
//console.log(lista.length());//mostra o tamanho
//console.log(lista.toString());
//console.log(lista.join(" - "));//coloca qualquer coisa no meio de cada elemento para dividilos 
//var nome = "Daniel Vitor";
//var n1= 23;
//var n2= 10;
//var frase = "Japão é o mehlor time do mundo ";
//alert("Bem vindo "+nome+" Voce tem "+idade+" anos")
//console.log(nome);
//console.log(n1+n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLowerCase());