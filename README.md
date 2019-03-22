# alfred telegram bot

[![CircleCI](https://circleci.com/gh/jonathan-sh/alfred-telegram-bot/tree/master.svg?style=svg)](https://circleci.com/gh/jonathan-sh/alfred-telegram-bot/tree/master)

[![Build Status](https://travis-ci.org/jonathan-sh/alfred-telegram-bot.svg?branch=master)](https://travis-ci.org/jonathan-sh/alfred-telegram-bot)

Please, set your telegram bot code in `src/configurations/custom-general.js`.<br />
You can find in https://telegram.me/botfather.

##  
#### install
```sh
npm i
```
#### dev mode
```sh
npm run dev
```

#### prd mode
```sh
npm run start
```
___
[![Build Status](https://uploaddeimagens.com.br/images/001/951/752/full/Webp.net-resizeimage.png?1552276489)](https://google.com)
#### build
```sh
docker build --rm -f "Dockerfile" -t alfred-telegram-bot:alpha .
```
#### run
```sh
docker run --rm -d alfred-telegram-bot:alpha
```