const generate = require("./lib/generate");
const welcome = require("./lib/welcome");
const config = require("./config");

(async () => {

	//await Promise.all(config.recipients.map(welcome))
	await Promise.all(config.recipients.map(generate));

})().catch(e => console.log(e));
