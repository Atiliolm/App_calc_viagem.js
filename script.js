function transformaMoeda(numero){
  return numero.toFixed(2).replace(".",",")
}
function calcular(){
  km=inputDistancia.value
  min=inputTempo.value
  valor=2+km*1.4+min*0.26
  botaoCalcular.innerHTML="Valor Total: R$" + transformaMoeda(valor)
}