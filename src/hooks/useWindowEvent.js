import { useEffect } from 'react';

const useWindowEvent = (event, callback, dependencies) => {
  useEffect(
    () => {
      window.addEventListener(event, callback);
      return () => window.removeEventListener(event, callback);
    },
    dependencies ? [event, callback, ...dependencies] : [event, callback],
  );
};

export default useWindowEvent;
