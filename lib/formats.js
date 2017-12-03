const List = require("./List");

const people = new List("people.txt");
const things = new List("things.txt");
const faces = new List("faces.txt");
const actions = new List("actions.txt");

const formats = module.exports = [
	() => `"I like ${things.random()} but I don't like ${things.random()}" - ${people.random()}`,
	() => `"Don't ever let ${Math.floor(Math.random() * 20)} ${things.random()} spoil your day" - ${people.random()}`,
	() => `"What on earth am I going to do with ${Math.floor(Math.random() * 1000)} ${things.random()}?" - ${people.random()}`,
	() => `"Where do you ${actions.random()}? Wherever the ${things.random()} are" - ${people.random()}`,
	() => `"They ask me how I ${actions.random()}, I always tell them the same thing: ${actions.random()}" - ${people.random()}`
];

formats.random = () => formats[Math.floor(Math.random() * formats.length)]();
