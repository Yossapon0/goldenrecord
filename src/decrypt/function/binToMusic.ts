import {
  createNotesObject,
  createOctavesObject,
  createToolsObject,
} from '../../function/createMusicObject';

import { musicUncompressor } from '../../decrypt/function/musicUncompressor';

const notesObject: { [keys: string]: string } = createNotesObject();
const octavesObject: { [keys: string]: string } = createOctavesObject(
  2,
  5,
);
const toolsObject: { [keys: string]: string } = createToolsObject();

/* BEAM ME UP, SCOTTY */
const binToMusic = (data: string): string => {
  let notesMap = new Map();
  let octavesMap = new Map();
  let toolsMap = new Map();

  for (let [key, value] of Object.entries(notesObject)) {
    notesMap.set(value, key);
  }
  for (let [key, value] of Object.entries(octavesObject)) {
    octavesMap.set(value, key);
  }
  for (let [key, value] of Object.entries(toolsObject)) {
    toolsMap.set(value, key);
  }

  console.log(data);
  data = data
    .match(/....../g)
    .map((x: string) => {
      if (toolsMap.has(x)) {
        const data = toolsMap.get(x);
        console.log(x, ':', data);
        return data + '-';
      } else {
        const noteBin = x.slice(0, 4);
        const octaveBin = x.slice(4, 6);
        const noteMusic = notesMap.get(noteBin);
        const octaveMusic = octavesMap.get(octaveBin);
        console.log(
          x,
          '->',
          noteBin,
          ':',
          noteMusic,
          '+',
          octaveBin,
          ':',
          octaveMusic,
          '->',
          noteMusic + octaveMusic,
        );
        return noteMusic + octaveMusic + '-';
      }
    })
    .join('')
    .slice(0, -1);
  console.log(data);
  data = musicUncompressor(data);
  return data;
};

export { binToMusic };
