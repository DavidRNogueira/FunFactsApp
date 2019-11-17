import AuthenticationService from '../../services/AuthenticationService';
import assert from 'assert';
import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { IRandomFactService } from '../../types/server';
import RandomFactService from '../../services/RandomFactService';

chai.use(sinonChai);

describe('Random Fact Service', () => {
  const randomFactServie: IRandomFactService = new RandomFactService();
  it('Should retrieve a random fact', () => {
    // This needs updated after db is updated.
    if (randomFactServie.getRandomFact()) {
      assert.equal(typeof randomFactServie.getRandomFact().text === 'string', true);
      return;
    }
    throw Error('getRandomFact does not return a defined value');
  });
});
