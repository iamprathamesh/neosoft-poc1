import chai from 'chai';
import chaiHttp from 'chai-http';
import IUser from '../app/interfaces/user';
import server from '../app/server';

chai.should();

chai.use(chaiHttp);

describe(('Auth API'), () => {

    // Test find API
    describe(('GET /auth/login'), () => {
        it('it should return token', (done) => {
            const loginCreds: IUser = {
                email: 'string@123.com',
                password: 'string',
            };
            
            chai.request(server)
                .post('/auth/login')
                .send(loginCreds)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                done();
            });
        });

        it('it should return error', (done) => {
            const loginCreds: IUser = {
                email: 'string@123.com',
                password: 'string@123',
            };
            
            chai.request(server)
                .post('/auth/login')
                .send(loginCreds)
                .end((err, res) => {
                    res.should.have.status(403);
                done();
            });
        });
    });
});
