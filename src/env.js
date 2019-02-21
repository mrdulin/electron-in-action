const dotenv = require('dotenv');

const dotenvOutput = dotenv.config({ debug: process.env.NODE_ENV !== 'production' });

if (dotenvOutput.error) {
  throw dotenvOutput.error;
}
console.log('env vars: ', dotenvOutput.parsed);
