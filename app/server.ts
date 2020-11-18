import dotenv from 'dotenv';
dotenv.config();
import Http from 'http';
import App from './app';

dotenv.config();

const server: Http.Server = Http.createServer(App);

server.listen(3000, () => {
    console.log('server started');
});
