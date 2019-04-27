export const formatDate = (time, locale) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: undefined, minute: undefined, hour12: true, weekday: undefined };
  const date = new Date(time);

  return date.toLocaleDateString(locale, options);
};
