import * as ThickerCLI from '../lib';
import * as Chai from 'chai';

const should = Chai.should();

describe('Library#index', () => {
    it('should export what\'s needed', () => {
        should.exist(ThickerCLI.Files);
        should.exist(ThickerCLI.Interface);
        should.exist(ThickerCLI.Markdown);
    });
});

