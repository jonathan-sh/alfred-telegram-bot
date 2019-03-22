class SrcResponse
{
    constructor()
    {
        this.negative = ["nops", "not today satan", "não achei :(", "ixi, eu tropecei em algo aqui", "chama os bombeiros", "sei lá o que você tentou fazer aqui...", "pode chorar, deu certo não :/"];
        this.positive = ["parece que funcionou", "pronto", "olha, funcionou, eu quase não acreditei", "GG, rodando"];
        this.sarcasm  = ["eu sou uma brincadeira para você !?", "fala sério, você não sabe o que está fazendo?", "faça um favor para nós, acessa essa site aqui : https://stackoverflow.com/, depois você volta", "quer saber de uma coisa ? TOCA O PÉ DA MINHA IGREJA"];
    }

    _getRandom(list)
    {
        let max = list.length-1;
        let min = 0;
        let ind = Math.random() * (max - min) + min;
        return list[parseInt(ind)];
    }

    getOneNegative()
    {
        return this._getRandom(this.negative);
    }

    getOnePositive()
    {
        return this._getRandom(this.positive);
    }

    getOneSarcasm()
    {
        return this._getRandom(this.sarcasm);
    }

    getWelcome()
    {
        return "Então quer dizer que você quer rodar scripts via telegram... Humm, meio preguisoço, mas ok. 👽"
    }
}
export default new SrcResponse();