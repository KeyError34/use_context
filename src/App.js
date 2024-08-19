
import { useState } from 'react';
import  "./app.scss"
import { LanguageContext } from './context/LanguageContext';
import LanguageSwitcher from './components/languageSwitcher';
function App() {
    const [language,setLanguage] = useState('en')
    function toggleLanguage (){
      setLanguage((prevLang)=>prevLang === "en" ? "de": "en")
    }
    const texts = {
      en: 'Hello, this is English text.',
      de: 'Hallo, dieser Text ist auf Deutsch.'
    };
  return (
    <LanguageContext.Provider value={{toggleLanguage}}>
    <div className="appContainer">
      <p > {texts[language]}</p>
      <LanguageSwitcher/>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
