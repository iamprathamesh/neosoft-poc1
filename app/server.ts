import dotenv from 'dotenv';
dotenv.config();
import Http from 'http';
import App from './app';

dotenv.config();

const server: Http.Server = Http.createServer(App);

server.listen(process.env.PORT!, () => {
    console.log(`server started on port: ${process.env.PORT!}`);
});

export default server;
