import { CreateTable } from '../domain/use-cases/create-table.use-case.ts';
import { SaveFile } from '../domain/use-cases/save-file.use-case.ts';

interface Options {
  base: number;
  limit: number;
  showTable: boolean;
  outputDir: string;
  fileName: string;
}

export class Server {
  static run({ base, limit, showTable, outputDir, fileName }: Options) {
    console.log(`Server running ...`);

    const table = new CreateTable().exec(base, limit);

    if (showTable) console.log(table);

    const isSaved = new SaveFile().exec(outputDir, fileName, table);

    if (isSaved) {
      console.log('File was created and saved!');
    } else {
      console.log('File unsuccessfully created or saved');
    }
  }
}
