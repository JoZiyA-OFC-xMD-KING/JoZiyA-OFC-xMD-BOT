const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SESSION ID",
MONGODB: process.env.MONGODB || "MONGOURL",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'JoZiyA-OFC-xMD-KING': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
