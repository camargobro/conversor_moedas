function converterMoeda(){

const moedaDestino = document.getElementById('moeda_destino').value;
const moedaOrigem = document.getElementById('moeda_origem').value;
const quantidadeConverter = document.getElementById('converter').value;

if (moedaDestino === "" || moedaOrigem === "") {
    alert("Escolha as moedas de origem e destino!");
    return;  
} else if( quantidadeConverter === "") {
    alert("Escolha a quantidade a ser convertida!");
    return;
} else if(moedaDestino === moedaOrigem){
 alert("As moedas de origem e destino não podem ser iguais!");
  return;
}

const taxasMoedas = {
  BRL: { USD: 1 / 5.25, EUR: 1 / 6.37 },
  USD: { BRL: 5.25, EUR: 0.85 },
  EUR: { BRL: 6.37, USD: 1.18 }
};
const taxaConversao = taxasMoedas[moedaDestino][moedaOrigem];
const valorConversao = taxaConversao * quantidadeConverter;

   document.getElementById('texto_conversao').innerHTML = `
<h1 class="texto_conversao">A conversão de ${quantidadeConverter} ${moedaDestino} para ${moedaOrigem} é de ${valorConversao}</h1>`;

}
function limpar(){
    document.getElementById('texto_conversao').innerHTML = "Nenhuma moeda convertida até o momento!";
    document.getElementById('moeda_destino').value = "";
    document.getElementById('moeda_origem').value = "";
    document.getElementById('converter').value = "";
}