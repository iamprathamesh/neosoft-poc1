import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app/server';

chai.should();

chai.use(chaiHttp);

describe(('Product API'), () => {

    describe(('GET findAll'), () => {

        it('it should return all the products', (done) => {
            chai.request(server)
                .get('/product/findAll')
                .set('Authorization', process.env.TOKEN!)
                .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });

        it('it should return error', (done) => {
            chai.request(server)
                .get('/product/findAll')
                .end((err, res) => {

                res.should.have.status(403);
                done();
            });
        });
    });
});
