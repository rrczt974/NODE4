const userInformation = require('./node_modules/dotenv/index.env');

console.log(`I am ${userInformation.name}, wilder in ${userInformation.city}, and I love ${userInformation.language}.`);
