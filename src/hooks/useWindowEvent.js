import { useEffect } from 'react';

export const useWindowEvent = (event, callback, dependencies) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback, ...dependencies]);
};
