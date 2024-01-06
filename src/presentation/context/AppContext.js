import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [words, setWords] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchWords = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'http://itgirlschool.justmakeit.ru/api/words',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch words');
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchWords();
  }, []);

  return (
    <AppContext.Provider value={{ words, setWords, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};
