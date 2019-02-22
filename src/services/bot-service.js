import TelegramBot from 'node-telegram-bot-api';
import cfg from '../configurations/custom-general';
import shell from 'shelljs';
import src from './src-response'
class BotService
{
    constructor()
    {
        this.bot = new TelegramBot(cfg.telegram_bot, {polling: true});
    }

    init()
    {
        console.log("alfred telegram on");
        this.bot.onText(/\/start/, (msg, match) =>
        {
            let chat_id   = msg.chat.id;
            let text = "👽 então quer dizer que você quer fazer builds";
            this.bot.sendMessage(chat_id, text);
        });
        this.bot.onText(/\/build/, (msg, match) =>
        {
            let chat_id   = msg.chat.id;
            msg.text.split(" ")
            this.bot.sendMessage(chat_id, 'pode contar comigo 👍');
            setTimeout(()=>
            {
                let result = shell.exec('/solinftec/bin/update.sh')
                if(result.stdout)
                {
                    this.bot.sendMessage(chat_id, "BUILD SUCCESS");
                }
                else
                {
                    this.bot.sendMessage(chat_id, result.stdout);
                    this.bot.sendMessage(chat_id, "BUILD FAIL");
                }
            }, 500)
        });

        this.bot.onText(/\/status/, (msg, match) =>
        {
            let chat_id   = msg.chat.id;
            let service = msg.text.split(" ")[1]
            setTimeout(()=>
            {
                let run = `systemctl list-units --type service | grep ${service}`;
                let result = shell.exec(run);
                if(result.stdout)
                {
                    this.bot.sendMessage(chat_id, result.stdout);
                }
                else
                {
                    this.bot.sendMessage(chat_id, src.getOneNegative());
                }
            }, 500)
        });

        this.bot.onText(/\/help/, (msg, match) =>
        {
            let chat_id   = msg.chat.id;
            let text = "/build service_name \n/status service_name"
            this.bot.sendMessage(chat_id,text);
        });
    }
}
export default new BotService();