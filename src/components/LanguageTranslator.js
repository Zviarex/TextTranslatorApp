import React, { useState } from 'react';
import axios from 'axios';
import './LanguageTranslator.css'; // Ensure you have this CSS file

// Define language options
const languageOptions = {
  auto: 'Auto Detect',
  en: 'English',
  id: 'Indonesian',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  tl: 'Filipino'
};

const LanguageTranslator = () => {
  const [sourceLanguage, setSourceLanguage] = useState('auto'); // Default to auto-detect
  const [targetLanguage, setTargetLanguage] = useState('id');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');

  const translateText = async () => {
    const requestData = {
      source_language: sourceLanguage,
      target_language: targetLanguage,
      text: inputText
    };
  
    const options = {
      method: 'POST',
      url: process.env.REACT_APP_API_URL,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: requestData
    };
  
    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translated_text);
      setError('');
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setError('Error translating text.');
    }
  };
  

  return (
    <div className="language-translator">
      <h1>Language Translator</h1>
      <div className="dropdown-container">
        <label>
          Source Language:
          <select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            {Object.entries(languageOptions).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Target Language:
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {Object.entries(languageOptions).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="translation-container">
        <div className="column">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
            rows="10"
            cols="40"
          />
        </div>
        <div className="column">
          <textarea
            value={translatedText}
            readOnly
            placeholder="Translated text"
            rows="10"
            cols="40"
          />
        </div>
      </div>
      <button onClick={translateText}>Translate</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LanguageTranslator;
