const boxen = require('boxen');
const beep = require('beepbeep')

function displayInfo(message = '', numberOfBeeps = 0) {
    console.log(boxen(message, {padding: 1, margin: 2, borderColor: 'magenta', backgroundColor:'#89858b'}));
    beep(numberOfBeeps);
};

displayInfo("Hello, world!", 1);

