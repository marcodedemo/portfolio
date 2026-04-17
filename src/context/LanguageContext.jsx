import { createContext, useContext, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("it");
  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "it" ? "en" : "it"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
