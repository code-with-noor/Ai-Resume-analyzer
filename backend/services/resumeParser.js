const fs = require("fs");
const pdfParse = require("pdf-parse");

const parseResume = async (filepath) => {
  const dataBuffer = fs.readFileSync(filepath);

  const data = await pdfParse(dataBuffer);

  return data.text;
};

module.exports = parseResume;