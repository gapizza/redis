import { expect } from 'chai';
import { processMultiResults } from '../index';

describe('unit tests', () => {
  it('processes multi result', () => {
    const result = [
      [null, 'OK'],
      [null, 'OK'],
      [null, 'OK'],
      [null, 1],
      [null, 'OK'],
      [null, 0],
    ];

    const processed = processMultiResults(result);

    expect(processed).to.eql(['OK', 'OK', 'OK', 1, 'OK', 0]);
  });

  it('processes multi result - fails on error', () => {
    const result = [
      [null, 'OK'],
      ['Error!!', 'OK'],
      [null, 'OK'],
      [null, 1],
      [null, 'OK'],
      [null, 0],
    ];

    expect(() => processMultiResults(result)).to.throw(/Error!!/);
  });
});
