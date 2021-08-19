const getFileNames = require("./getFileNames");
const transformXmindToSvg = require("./transformXmindToSvg");


async function main() {
 const fileNames =  await getFileNames();

  for (let index = 0; index < fileNames.length; index++) {
    const fileName = fileNames[index];
    await transformXmindToSvg(fileName)
  }
  
}

main();