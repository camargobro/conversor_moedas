function converterMoeda(){

const moeda = document.getElementById('moeda').value;
const quantidadeConverter = document.getElementById('converter').value;

if(moeda === "dolar"){
    const valorDolar = 5.25;
    const dolarConvertido = quantidadeConverter * valorDolar;
    const nomeDolar = quantidadeConverter > 1 ? "dólares" : "dólar";
   document.getElementById('texto_conversao').innerHTML = `
<h1 class="texto_conversao">A conversão de ${quantidadeConverter} ${nomeDolar} para Real é de ${dolarConvertido}</h1>`;
}else if(moeda === "euro"){
    const cotacaoEuro = 6.37;
    const euroConvertido = quantidadeConverter * cotacaoEuro;
    const nomeEuro = quantidadeConverter > 1 ? "euros" : "euro";
    document.getElementById('texto_conversao').innerHTML = `
<h1 class="texto_conversao">A conversão de ${quantidadeConverter} ${nomeEuro} para Real é de ${euroConvertido}</h1>`;
} else{
    return alert('Selecione uma moeda válida');
}

}
function limpar(){
    document.getElementById('converter').value = "";
    document.getElementById('moeda').value = "";
    document.getElementById('texto_conversao').innerHTML = "Nenhuma moeda convertida até o momento!";
}