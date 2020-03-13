import DummyClass from '../lib/index';
import * as Chai from 'chai';

const should = Chai.should();

/**
 * Dummy test
 */
describe('Dummy test', () => {
    it('works if true is truthy', () => {
        const truthyValue = true;
        truthyValue.should.be.true;
    });

    it('DummyClass is instantiable', () => {
        new DummyClass().should.be.an.instanceOf(DummyClass);
    });

    it('DummyClass untested method should return 42', () => {
        new DummyClass().untestedMethod().should.equal(42);
    });
});
