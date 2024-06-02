// const { ImageAnnotatorClient } = require('@google-cloud/vision');

// const client = new ImageAnnotatorClient({
//   keyFilename: 'cosmic-shift-387009-7e9d7fd75f35.json',
// });

// async function detectText() {
//     const [result] = await client.textDetection('./two_word.png');
//     const annotations = result.textAnnotations;
//     console.log('Text:');
//     annotations.forEach(annotation => {
//       console.log(annotation.description);
//     });
//   }
  
//   detectText();

const GOOGLE_API_KEY = "AIzaSyBosQxVC9YT9yK_r7GoJtoYGdagxJ3fGe0"
const PROJECT_NAME = "cosmic-shift-387009"

export const requestOCR = (image_base64) => {
    const data = {
        "requests": [
          {
            "image": {
              "content": image_base64
            },
            "features": [
              {
                "type": "TEXT_DETECTION",
                "maxResults": 1
              }
            ]
          }
        ]
      }
    fetch(`https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_API_KEY}`, {
        method : "POST",
        headers : {
            "Content-Type":"application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }
    ).then(res => res.json()
    ).then(res => {
      res = res['responses']
      res = res['0']
      console.log('ocr result:', res['textAnnotations'])
      res = res['textAnnotations']
      const en_word = res[1].description
      const ko_word = res[2].description
      document.getElementById("eng_text").value = en_word;
      document.getElementById("kor_text").value = ko_word;
    })


}