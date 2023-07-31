//importing modules and functions
const OpenAI=require( './controllers/apiGen');
const express = require('express');
const multer = require('multer');
const cors = require('cors'); 
const textDetection = require('./controllers/textDetection'); 
//configuring the modules
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require('dotenv').config();
app.post('/process_image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No image file received.' });
      return;
    }

    const imagePath = req.file.path;
    
    const { code, dalle } = req.body;
    console.log(code,dalle);
    const extractedText = await textDetection(imagePath); // Call the textDetection function
    const openAI = new OpenAI(process.env.OPENAI_KEY);
    const types = [
        'Expand the following text.\n',
        'Shorten the following text.\n',
        'Summarize it into bullet points.\n',
        'Show Spelling Errors\n',
        'Correct Grammatical errors\n',
        'Answer the following Question(s).\n'
      ];
      
    const model = 'text-davinci-003';
    
    const generatePrompt =`"${types[code]}", "${extractedText}".`;

    await openAI.generateText(generatePrompt, model, 800)
        .then(generatedText => {
            //console.log(generatedText);
            res.json({ text: generatedText });
        })
        .catch(error => {
            console.error(error);
        });
        

     
  } catch (error) {
    console.error('Error during text detection:', error);
    res.status(500).json({ error: 'An error occurred during text detection.' });
    
}
});

const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
