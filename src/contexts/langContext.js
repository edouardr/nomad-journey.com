import React from 'react';

const LangContext = React.createContext();

const LangProvider = props => {
  const [language, setLang] = React.useState(process.env.DEFAULT_LANG);

  const value = React.useMemo(() => {
    return {
      language,
      setLang,
    };
  }, [language]);

  return <LangContext.Provider value={value} {...props} />;
};

export { LangProvider, LangContext };
