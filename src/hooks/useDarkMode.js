import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  // Use key/value from local storage hook to set darkMode initial state
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    // If darkMode is true, add dark-mode class, else remove.
    const body = document.querySelector('body');
    darkMode === true
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [darkMode]); // Darkmode is the dependecy array

  // Toggle function that sets darkMode state true or false
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode];
};
