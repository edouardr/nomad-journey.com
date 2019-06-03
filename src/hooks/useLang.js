import React from 'react';
import { LangContext } from '../contexts/langContext';

const useLang = () => {
  const context = React.useContext(LangContext);

  if (!context) {
    throw new Error('useLang must be used within a LangContextProvider');
  }

  const { language, setLang } = context;
  const defineLang = lang => {
    setLang(lang);
  };

  return {
    language,
    defineLang,
  };
};

export default useLang;
