import https from 'https';
import http from 'http';
//import config, {nodeEnv, logStars} from './config';
// logStars('Function');

// https.get('https://www.lynda.com', res => {
// 	console.log('Response status code: ', res.statusCode);

// 	res.on('data', chunk => {
// 		console.log(chunk.toString());
// 	});
// });

const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
	res.write('Hello HTTP!\n');
	setTimeout(() => {
		res.write('I can stream!\n');
		res.end();
	}, 3000);
});

