var aporte = window.document.getElementById('txtaporte')
var tempo = window.document.getElementById('txttempo')
var taxa = window.document.getElementById('txttaxa')

var res = window.document.getElementById('soma')
var lucro = window.document.getElementById('resultlucro')
var imposto = window.document.getElementById('resultimposto')
var impostoliquido = window.document.getElementById('resultimpostoreal')
var bloco = window.document.getElementById('blocores')



function calcular() {
    var n1 = Number(aporte.value)
    var n2 = Number(tempo.value)
    var n3 = Number(taxa.value) 

    var postaxa = (n3/100)/12 //transforma a taxa em % e calcula o valor mensal
    var mes = n2*12 //pega o numero de anos e converte em meses
    var resultado = (n1*(1+postaxa))*((((1+postaxa)**mes)-1)/postaxa) // fórmula de juros compostos

    var lucrototal = (resultado - (n1*mes)) 

    bloco.style.opacity = 1
    
    if( n1 == '' || n2 == '' || n3 == ''||  n1 <= 0 || n2 <= 0 || n3 <= 0) {
        res.innerHTML = 'Por favor preencha todos os Campos'
    } else {
        if(n2 <= 1) {
            var impost = 25
            imposto.innerHTML = `${impost}%`
            lucro.innerHTML = `R$ ${lucrototal.toFixed(2)}`
            res.innerHTML = `R$ ${resultado.toFixed(2)}`
        } else if(n2 < 3) {
            var impost = 18
            imposto.innerHTML = `${impost}%`
            lucro.innerHTML = `R$ ${lucrototal.toFixed(2)}`
            res.innerHTML = `R$ ${resultado.toFixed(2)}`
        } else{
            var impost = 15
            imposto.innerHTML = `${impost}%`
            lucro.innerHTML = `R$ ${lucrototal.toFixed(2)}`
            res.innerHTML = `R$ ${resultado.toFixed(2)}`
        } 

        impostoliquido.innerHTML =  `R$ ${((lucrototal)*(impost/100)).toFixed(2)}`
    }
    
}

function limpar() {
    aporte.value = ''
    tempo.value = ''
    taxa.value = ''

    bloco.style.opacity = 0
}