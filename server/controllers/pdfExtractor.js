const pdfParse = require('pdf-parse');
const fs = require('fs');

const extractTextFromPDF = async (pdfPath) => {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error('Error during PDF extraction:', error);
    throw new Error('An error occurred during PDF extraction.');
  }
};

module.exports = extractTextFromPDF;