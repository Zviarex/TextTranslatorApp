Text Translator Web App
1. API: Text Translator API
2. Frontend: HTML/CSS integrated with React (I also installed AXION for API pueposes)
3. Backend: Node.js

USER STORY:
Text translation is essential on translating a word or a phrase that we didn't understand. As a huge fan of anime and korean dramas, I need to translate some terms into english to fully understand what's going on. Also it is best to products made from other country to translate those words to the language we're comfortable with to easily understand the content of the product.

STEPS:

1. Set Up the Project
Create a New React App:

Open your terminal and run:
"npx create-react-app translation-app"

Navigate to the Project Directory:
"cd translation-app"

Install Axios for API Requests:
"npm install axios"

2. Obtain API Key from RapidAPI
RapidAPI:
Find the "Text Translator" API:
Subscribe and Get Your API Key (I used the 0 cost subscription for the examination purposes):

3. Create and Configure the .env File
Create a .env File in the Root Directory of Your Project:

In the root directory of your React project, create a file named .env.

Add the Following Configuration to .env:
"REACT_APP_API_URL=https://text-translator2.p.rapidapi.com/translate
REACT_APP_RAPIDAPI_KEY= (the API key in the site)"

4. Create the LanguageTranslator Component
Create a LanguageTranslator.js File in the src/components Directory:

Inside the src/components directory, create a file named LanguageTranslator.js.

Add the Following Code to LanguageTranslator.js:

Import React, useState, and axios. Define language options and create the LanguageTranslator component with state variables for source language, target language, input text, translated text, and error handling. Define the translateText function to handle the API request using axios and update the state with the response data or error message. Render the component with a form for text input, language selection, and translation display.

Create a LanguageTranslator.css File for Styling:

Create a file named LanguageTranslator.css in the src/components directory to style the component as needed.

5. Update App.js to Use the LanguageTranslator Component
Modify the App.js File:

Import the LanguageTranslator component and use it within the App component’s render method.

6. Run the Application
Start the Development Server:

Run npm start to start the application in development mode. Open http://localhost:3000 in your browser to see the Translation App in action.