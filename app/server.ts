import Http from 'http';
import App from './app';

const server: Http.Server = Http.createServer(App);

server.listen(3000, () => {
    console.log('server started');
});
