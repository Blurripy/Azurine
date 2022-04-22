"use strict";
module.exports.help = {
    name: 'screenshot',
    description: 'Take a screenshot from a website',
    aliases: ['screen'],
    usage: '<website>',
    args: true
};
module.exports.run = async (message, args) => {
    const { chromium } = require('playwright');
    const { unlinkSync } = require("fs");
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 1080 });
    try {await page.goto(args[0]);}
    catch (e) {
        message.channel.send('Please specify a valid URL !');
        setTimeout(message.delete(), 1000);
    }
    await page.screenshot({ path: `./src/util/tmp/screenshot.png` });
    message.channel.send({ files: ['./src/util/tmp/screenshot.png'] });
    await browser.close();
    unlinkSync('./src/util/tmp/screenshot.png');
};