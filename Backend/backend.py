from flask import Flask, request
import requests
from PIL import Image
from flask_cors import CORS
import main
import os
import PDF_Reader
from OpenAI_api import getAIimage
import base64

app = Flask(__name__)
CORS(app)

@app.route('/process_image', methods=['POST'])
def process_image():
    code=int(dict(request.form)['code'])
    generate_image = True if (request.form['dalle'])=="true" else False
    image = request.files['image']
    print(generate_image)
    filename = image.filename
    extension = os.path.splitext(filename)[1]
    
    if extension == '.pdf':
        text = PDF_Reader.PDF_to_text(filename,code)
    else:
        image = Image.open(image)
        text=main.ImageToTextWithAI(image,code)

    if generate_image:
        img_link = getAIimage(text)
        print(img_link)
        image_response = requests.get(img_link)
        image_data = image_response.content
        img = base64.b64encode(image_data).decode('utf-8')
        response = {'text': text, 'image_link': img_link, "image": img}
        return response
    
    return text

if __name__ == '__main__':
    app.run(debug=True)
