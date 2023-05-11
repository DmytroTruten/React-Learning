const fs = require('fs');
const file = './data.txt';
const message = fs.readFileSync(file, 'utf8');

const capitalizeMessage = (message) => {
  return message.toUpperCase();
}

console.log(capitalizeMessage(capitalizeMessage(message)));