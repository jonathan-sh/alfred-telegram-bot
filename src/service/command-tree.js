import src  from "./src-response";
import she  from "shelljs";

const start = (msg, match, bot) =>
{
    bot.sendMessage(msg.chat.id, src.getWelcome());
};

const help = (msg, match, bot) =>
{
    let text = "/build {key} (try nemo) \n"+
               "/status {service_name}  (try your service name) \n"+
               "/run {command}  (try short commands like: date, pwd ...)";
    bot.sendMessage(msg.chat.id,text);
};

const build = (msg, match, bot) =>
{
    let chat_id = msg.chat.id;
    let key = msg.text.split(" ")[1];
    if(key == "nemo")
    {
        let run = "./sh/example.sh";
        sendFromTerminal(she.exec(run), chat_id, bot);
    }
    else
    {
        bot.sendMessage(chat_id, src.getOneSarcasm());
    }
};

const run = (msg, match, bot) =>
{
    let chat_id = msg.chat.id;
    let run = msg.text.split(" ")[1];
    sendFromTerminal(she.exec(run), chat_id, bot);
};

const status = (msg, match, bot) =>
{
    let chat_id = msg.chat.id;
    let service = msg.text.split(" ")[1];
    let run = `systemctl list-units --type service | grep ${service}`;
    sendFromTerminal(she.exec(run), chat_id, bot);
}

function sendFromTerminal(result, chat_id, bot)
{
    if(result.stdout)
    {
        bot.sendMessage(chat_id, result.stdout);
    }
    else
    {
        bot.sendMessage(chat_id, result);
        bot.sendMessage(chat_id, src.getOneNegative());
    }
}

export default { start, help, status, build, run }