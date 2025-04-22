import fs from 'fs';

interface ISaveFile {
  exec: (outputDir: string, fileName: string, content: string) => boolean;
}

export class SaveFile implements ISaveFile {
  constructor() { }

  exec(outputDir: string, fileName: string, content: string) {
    try {
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(`${outputDir}/${fileName}.txt`, content);
      return true;
    } catch (e: unknown) {
      console.error(e);
      return false;
    }
  }
}

// const outputPath = `outputs`;

// fs.mkdirSync(outputPath, { recursive: true });
// fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
// console.log('File created!');
