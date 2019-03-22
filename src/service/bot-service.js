import cfg  from "../configurations/custom-general";
import tel  from "node-telegram-bot-api";
import tree from "./command-tree"

class BotService
{
    constructor()
    {
        this.bot = new tel(cfg.telegram_bot, {polling: true});
    }

    init()
    {
        this.bot.onText(/\/run/, (any, math) => tree.run(any, math, this.bot));
        this.bot.onText(/\/help/, (any, math) => tree.help(any, math, this.bot));
        this.bot.onText(/\/start/, (any, math) => tree.start(any, math, this.bot));
        this.bot.onText(/\/build/, (any, math) => tree.build(any, math, this.bot));
        this.bot.onText(/\/status/, (any, math) => tree.status(any, math, this.bot)); 
    }
}
export default new BotService()