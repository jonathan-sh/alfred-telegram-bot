let main_router = "/feedback";
import bot from '../services/bot-service';
module.exports = (app) =>
{
	app.get(main_router+'/app-cloned/:app_name', (req, res) =>
	{
		let app = req.params.app_name;
		bot.send(app + ' - cloned');
		res.send({"ok":true});
	});

	app.get(main_router+'/app-in-build/:app_name', (req, res) =>
	{
		let app = req.params.app_name;
		bot.send(app + ' - building');
		res.send({"ok":true});
	});

	app.get(main_router+'/app-restart/:app_name', (req, res) =>
	{
		let app = req.params.app_name;
		bot.send(app + ' - restarting');
		res.send({"ok":true});
	});


	app.get(main_router+'/app-is-up/:app_name', (req, res) =>
	{
		let app = req.params.app_name;
		bot.send(app + ' - is up now');
		res.send({"ok":true});
	});
}