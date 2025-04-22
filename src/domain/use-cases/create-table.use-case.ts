interface ICreateTable {
  exec: (base: number, limit?: number) => string;
}

export class CreateTable implements ICreateTable {
  constructor() { }

  exec(base: number, limit: number = 10) {
    let outputMessage = `\n==================================\n        Tabla del ${base}\n==================================\n`;

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}
