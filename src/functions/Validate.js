import validator from 'validator';

export const validarData = (dataInicial) => {
    let dia = dataInicial.split("/")[0];
    let mes = dataInicial.split("/")[1];
    let ano = dataInicial.split("/")[2];
    let data = ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    let isDate = false;
    if (validator.isDate(data)) {
        isDate = true;
    }
    return isDate;
}
export const calculaIdade = (dataNasc) => {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var anoNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        if (mesAtual === mesNasc) {
            if (new Date().getDate() < diaNasc) {
                idade--;
            }
        }
    }
    return idade;
}