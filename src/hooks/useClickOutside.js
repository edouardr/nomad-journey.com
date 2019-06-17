import React from 'react';

const useClickOutside = (ref, handler, events) => {
  if (!events) {
    events = [`mousedown`, `touchstart`];
  }
  const detectClickOutside = event =>
    !ref.current.contains(event.target) && handler();
  React.useEffect(() => {
    for (const event of events) {
      document.addEventListener(event, detectClickOutside);
    }
    return () => {
      for (const event of events) {
        document.removeEventListener(event, detectClickOutside);
      }
    };
  }, [ref, handler, events]);
};

export default useClickOutside;
