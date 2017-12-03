const fs = require("fs");

module.exports = class List {
	constructor(filename) {
		this.items = fs.readFileSync(`${__dirname}/../lists/${filename}`, "utf8")
			.split("\n")
			.filter(x => x.length > 0);
	}

	random() {
		return this.items[Math.floor(Math.random() * this.items.length)];
	}
};
