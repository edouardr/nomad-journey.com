import { useEffect } from 'react';

const useWindowEvent = (event, callback, dependencies) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback, ...dependencies]);
};

export default useWindowEvent;
