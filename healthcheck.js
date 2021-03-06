// tslint:disable no-console
const http = require('http');

const options = {
    host: 'localhost',
    path: '/health',
    port: process.env.PORT,
    timeout: 2000,
};

const request = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    if (res.statusCode === 200) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

request.on('error', function(err) {
    console.log('ERROR', err);
    process.exit(1);
});

request.end();
