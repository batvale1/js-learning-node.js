//console.log('Hello, world');
const ansi = require('ansi');

const cursor = ansi(process.stdout);

cursor.red().bold().underline().bg.grey().write('Hello, world!').reset().bg.reset().write('\n');