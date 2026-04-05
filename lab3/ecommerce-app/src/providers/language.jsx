import { useState } from "react";
import { languageContext } from "../context/language";
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};