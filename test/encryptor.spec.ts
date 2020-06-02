import { encryptor, decryptor } from '../src/index';

import { expect } from 'chai';
import 'mocha';

describe('Full cycle music pitches encryption and decryption', () => {
  it('set 1: should return true', () => {
    const music: string =
      'E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-G2-F#2-G2-H2-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-D3-H1-B2-H2-E3-E3-F#3-H1-U0-D3-H0-B2-H1-U0-E3-E3-F#3-H1-U0-G3-H0-A3-H1-U0-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-G2-F#2-G2-H2-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-G2-F#2-G2-H2-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-D3-H1-B2-H2-E3-E3-F#3-H1-U0-D3-H0-B2-H1-U0-E3-E3-F#3-H1-U0-G3-H0-A3-H1-U0-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-G2-H0-D3-H0-B2-H2-G2-H0-G2-H0-D3-H2-U0-S0-U0-E3-F#3-H0-G3-H0-F#3-H0-E3-H0-D3-H0-E3-H0-D3-H0-A2-H0-G2-H0-D3-H2-U0-B2-C3-D3-A2-H1-U0-B2-H0-G2-H1-U0-D2-H0-D3-H2-U0-E3-F#3-H0-G3-H0-F#3-H0-E3-H0-D3-H0-A3-H0-U0-B3-A3-H0-G3-H0-G3-H1-S0-G3-H0-F#3-H1-U0-D3-H1-E3-H2-S1-E3-E3-H0-F#3-H0-G3-H1-G3-H0-U0-F#3-H1-D3-H1-E3-H2-U0-S1-D3-H0-B2-H2-S1-U0-G2-G2-H0-A2-H1-G2-H2-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-G2-F#2-H0-G2-H2-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-D3-H1-B2-H2-E3-E3-F#3-H1-U0-D3-H0-B2-H1-U0-E3-E3-F#3-H1-U0-G3-H0-A3-H1-U0-S0-E3-D3-H0-B2-H0-C3-H0-B2-H0-A2-H1-G2-G2-H0-A2-H0-G2-H0-D3-H0-B2-H2-G2-H0-G2-H0-D3-H2-U0-S0-U0-E3-F#3-H0-G3-H0-F#3-H0-E3-H0-D3-H0-E3-H0-D3-H0-A2-H0-G2-H0-D3-H2-U0-B2-C3-D3-A2-H1-U0-B2-H0-G2-H1-U0-D2-H0-D3-H2-U0-E3-F#3-H0-G3-H0-F#3-H0-E3-H0-D3-H0-A3-H0-U0-B3-A3-H0-G3-H0-G3-H1-S0-G3-H0-F#3-H1-U0-D3-H1-E3-H2-S1-E3-E3-H0-F#3-H0-G3-H1-G3-H0-U0-F#3-H1-D3-H1-E3-H2-U0-S1-D3-H0-B2-H2-S1-U0-D3-H0-D3-H0-D3-H0-E3-H2-U0';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
  it('set 2: should return true', () => {
    const music: string =
      'G3-G3-A3-H0-G3-H0-C4-H0-B3-H1-G3-G3-A3-H0-G3-H0-D4-H0-C4-H1-G3-G3-G4-H0-E4-H0-C4-H0-B3-H0-A3-H0-F4-F4-E4-H0-C4-H0-D4-H0-C4-H1-H2';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
  it('set 3: should return true', () => {
    const music: string =
      'E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2-E2-H0-G2-F#2-H0-G2-C2-H1-G2-D2-B2-G2-F#2-D2';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
});
