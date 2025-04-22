import fs from 'fs';
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';

describe('save-file.use-case.ts', () => {

  test('should create file with respective params', () => {
    const outDir = 'outputs';
    const fileName = 'xxxxxx';
    const content = 'zzzzzzzzzzzz';

    const isSaved = new SaveFile().exec(outDir, fileName, content);
    expect(isSaved).toBe(true);
  })

  test('should throw an error when directory can\'t be created', () => {
    const outDir = 'outputs';
    const fileName = 'error';
    const content = 'aaaaaaaaaaaaaaaaaaaaaaaa';

    const mkdirSyncSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('error creating the requested directory') }
    );

    const isSaved = new SaveFile().exec(outDir, fileName, content);

    expect(isSaved).toBe(false);

    mkdirSyncSpy.mockRestore();
  })

  test('should throw an error when file can\'t be written', () => {
    const outDir = 'outputs';
    const fileName = 'new-error';
    const content = 'invalid content!!!!';

    const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error('error writing to the file') }
    );

    const isSaved = new SaveFile().exec(outDir, fileName, content);

    expect(isSaved).toBe(false);

    writeFileSyncSpy.mockRestore();
  })
})