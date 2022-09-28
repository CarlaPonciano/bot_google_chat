function sendMessage () {
  buildMessage();
  formData = {
    "thread": {
      "name": "<THREAD_ID>"
    },
    "text": MESSAGE,
    "cards": [{
      "sections": [{
        "widgets": [{
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
};
