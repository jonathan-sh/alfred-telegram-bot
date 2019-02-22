
class SrcResponse
{
    constructor()
    {
        this.negative = ["nops", "not today satan", "não achei :(", "ixi, eu tropecei em algo aqui", "chama os bombeiros"];
        this.positive = ["parece que funcionou", "pronto", "olha, funcionou, eu quase não acreditei", "GG, rodando"];
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
}
export default new SrcResponse();