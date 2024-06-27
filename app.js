alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao ns
while (chute != numeroSecreto) {
    chute = prompt('escolha um numero entre 1 e 100');
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        //para PARA nao continua
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas =  tentativas +1
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert(`isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
