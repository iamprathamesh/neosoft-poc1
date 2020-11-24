import chai from 'chai';
import chaiHttp from 'chai-http';
import IUser from '../app/interfaces/user';
import server from '../app/server';

chai.should();

chai.use(chaiHttp);

describe(('User API'), () => {

    describe(('GET findAll'), () => {

        it('it should return all users', (done) => {

            chai.request(server)
                .get('/user/findAll')
                .set('Authorization', process.env.TOKEN!)
                .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        
        });

        it('it should return error', (done) => {

            chai.request(server)
                .get('/user/findAll')
                .end((err, res) => {

                res.should.have.status(403);
                done();
            });
        
        });
    });
});