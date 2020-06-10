import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const body = document.querySelector('body');
    darkMode === true
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [darkMode]);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode];
};
