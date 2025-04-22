import { argv } from './plugins/argv.plugin.ts';
import { Server } from './presentation/server.ts';

async function main() {
  const { b: base, l: limit, s: showTable, d: outputDir, n: fileName } = argv;

  Server.run({
    base,
    limit,
    showTable,
    outputDir,
    fileName
  });
}

(async () => {
  await main();
})();
