/* TODO: rewrite test */

import { binToDna } from '../src/encrypt/function/binToDna';
import { dnaToBin } from '../src/decrypt/function/dnaToBin';

import { expect } from 'chai';
import 'mocha';

describe('data = dnaToBin(binToDna(data))', () => {
  it('should return the right conversion', () => {
    const data =
      '01111000010111001010110001110010101010111101011000111110010110001010001000110111011111000010111011110110110110011010110000100101000010111110110010101001000011110101110010110010111100101010001110001101110001111001000001100110001110111001101011100111001010101001100011100000001111111001011111100110000001100110110110100011101000010111001010000110110110110011111111010101111001100111010100011010110111101011001110001110010101110110';
    console.log(binToDna(data));
    expect(data).to.equal(dnaToBin(binToDna(data)));
  });
});
