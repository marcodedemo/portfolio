import { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

function savedLang() {
  try {
    return localStorage.getItem("lang") === "en" ? "en" : "it";
  } catch {
    return "it";
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(savedLang);
  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "it" ? "en" : "it"));

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // storage bloccato: la lingua resta valida solo per questa visita
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LanguageContext);
}
