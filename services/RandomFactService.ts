import { IRandomFactService, IFact } from '../types/server';

export default class RandomFactService implements IRandomFactService {
  public getRandomFact(): IFact {
    // Dummy data for now. Will replace with actual random facts from DB when they are available.
    const facts: Array<IFact> = [
      {
        text: 'Oranges get their name from their color.',
      },
      {
        text: 'Dogs can bark.',
      },
      {
        text: 'Dolphins can swim and are smart.',
      },
    ];

    return facts[Math.round(Math.random() * facts.length)];
  }
}
