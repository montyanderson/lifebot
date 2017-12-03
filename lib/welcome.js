const axios = require("axios");
const formats = require("./formats");
const config = require("../config");

module.exports = async ({ phone, name }) => {
	const text = `Hi ${name}, welcome to LifeBot! To unsubscribe, write 'unsubscribe' on a piece of toilet paper and throw in your nearest bin.`;

	console.log(`Sending \`${text}\` to ${name}`);

	await axios.get("https://api.clockworksms.com/http/send.aspx", {
		params: {
			Key: config.key,
			To: phone,
			Content: text,
			From: "LifeBot",
		}
	});
};
