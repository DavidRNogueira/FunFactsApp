import AuthenticationService from '../../services/AuthenticationService';
import assert from 'assert';
import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { IAuthenticationService, INewUser } from '../../types/server';

chai.use(sinonChai);

describe('Authentication Service', () => {
  let authenticationServce: IAuthenticationService;

  const req = {
    send: (value: any) => value,
  };

  const res = {
    send: (value: any) => value,
    end: (value: any) => value,
  };

  beforeEach(() => {
    authenticationServce = new AuthenticationService();
  });

  it('Should not register a new user if password does not match confirm password', () => {
    sinon.spy(res, 'end');

    const user: INewUser = {
      username: 'new-user132',
      password: '123',
      confirmPassword: '132',
      email: '123@123.com',
    };

    authenticationServce.newUser(user, req as any, res as any);
    expect(res.end).to.have.been.calledOnce;
  });
});
