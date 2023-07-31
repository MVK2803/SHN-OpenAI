const Tesseract = require('tesseract.js');

const textDetection = async (imagePath) => {
  try {
    const result = await Tesseract.recognize(
      imagePath,
      'eng', // Language code for English
      {
        logger: info => console.log(info.progress, info.status), // Optional logger to see the progress
      }
    );
    return result.data.text;
  } catch (error) {
    console.error('Error during OCR processing:', error);
    throw new Error('An error occurred during OCR processing.');
  }
};

module.exports = textDetection;
