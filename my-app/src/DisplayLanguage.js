import React, { useContext } from "react";

const LanguageContext = React.createContext("en");
export default function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <h1>Language: {language}</h1>
      </div>
    </LanguageContext.Provider>
  );
}
