import { musicCompressor } from '../src/functions/musicConverter/musicCompressor';
import { musicUncompressor } from '../src/functions/musicConverter/musicUncompressor';

import { expect } from 'chai';
import 'mocha';

describe('Compress and uncompress music pitches', () => {
  it('set 1: should return true', () => {
    const music = 'E4-F4-G5-E5-C5-D5-C5-C5-B4-B4';
    const result = musicUncompressor(musicCompressor(music));
    expect(result).to.equal(music);
  });
});

describe('set 2: Compress and uncompress music pitches', () => {
  it('should return true', () => {
    const music =
      'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';
    const result = musicUncompressor(musicCompressor(music));
    expect(result).to.equal(music);
  });
});
