function getGifRandom () {
  randomId = Math.floor(Math.random() * gifsNumber);
}

function sendMessage () {
  getGifRandom();
  formData = {
    "text": MESSAGE,
    "cards": [{
      "sections": [{
        "widgets": [{
          "image": {
            "imageUrl": GIFS[randomId]
          },
          'buttons': [
            {
              'textButton': {
                'text': '<BUTTON_TITLE>',
                'onClick': {
                  "openLink": {
                    "url": BUTTON_URL
                  }
                }
              }
            }
          ]
        }]
      }]
    }]
  };

  options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(formData)
  };

  const response = UrlFetchApp.fetch(WEBHOOK, options);
  Logger.log(response);
  Logger.log(randomId);
};
