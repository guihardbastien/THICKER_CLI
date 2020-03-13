import DummyClass from '../lib/index';
import * as Chai from 'chai';
import * as Sinon from 'sinon';

const should = Chai.should();

/**
 * Addition test
 */
describe('Addition test', () => {
    it('Callback should be called', () => {
        const callback = Sinon.spy();
        const dummy = new DummyClass();
        dummy.additionWithCallback(2, 3, callback);
        callback.called.should.be.true;
        callback.calledWith(2 + 3).should.be.true;
    });
    it('Callback should be called with proper value', () => {
        const callback = Sinon.spy();
        const dummy = new DummyClass();
        dummy.additionWithCallback(2, 3, callback);
        callback.calledWith(2 + 3).should.be.true;
    });
});
