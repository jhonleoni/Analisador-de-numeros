let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isanum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isanum(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
} else {
    window.alert('Valor inválido ou já encontrado na lista.')
}
}
num.value = ''
num.focus()

function analisar() {
    if(valores.length == 0) {
        window.alert('Adicione números antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>No total temos ${total} números inseridos.</p>`
        res.innerHTML += `<p>O maior número inserido foi ${maior}.<p>`
        res.innerHTML += `<p>O menor número inserido foi ${menor}.<p>`
        res.innerHTML += `<p>Somando todos os números, temos ${soma}`
        res.innerHTML += `<p>O valor médio da soma dos números inseridos é ${media}`
    }
}