const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhaSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const checkbox = document.querySelectorAll('checkbox')
const botoes = document.querySelectorAll('parametro-senha-botao');
const forcaSenha = document.querySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho (){
    if (tamanhaSenha > 1){
        tamanhaSenha--;
    }
    numeroSenha.textContent= tamanhoSenha;
    geraSenha();
}
function aumentaTamanhoTamanho (){
    if (tamanhaSenha > 20){
        tamanhaSenha++;
    }
    numeroSenha.textContent= tamanhoSenha;
    geraSenha();
}