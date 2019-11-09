import { IRandomFactoryService } from '../types/server';

const { log } = console;

export default class RandomFactService implements IRandomFactoryService {
  constructor() {
    log('constructor called');
  }

  test() {
    log('test');
  }
}
