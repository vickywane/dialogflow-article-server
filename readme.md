# Dialogflow Backend Application

<p> Hey there, welcome to the backend application for my articles on using Dialog published to [Smashing Magazine]("https://www.smashingmagazine.com/")</p>

<p> This Repository contains two branches for the following articles:</p>

### Building A Conversational N.L.P Enabled Chatbot Using Google’s Dialogflow [Default Branch]
https://www.smashingmagazine.com/2020/12/conversational-nlp-enabled-chatbot-google-dialogflow/
    
    This branch contains the webhooks built in the article linked above. The webhooks are served using Google Cloud Functions. It connects to a Dialogflow Agent on the Google cloud using a service account key. (see article for connection details). Clone the branch and run `yarn install` to install the needed packages. Then run `yarn start` to start the defined functions locally using the Functions Framework

### Integrating A Dialogflow Agent Into A React Application [Express-Server Branch]

     Note: Switch the default branch to the **Express-server** branch. This branch contains the files for an Express.js backend Application. It connects to a Dialogflow Agent on the Google cloud using a service account key. (see article for connection details). Clone the branch and run `yarn install` to install the needed packages. Then run `yarn start` to start the defined functions locally using the Functions Framework.
