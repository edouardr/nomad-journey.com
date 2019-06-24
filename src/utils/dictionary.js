export const getDictionaryValue = ({ key, lang, data }) => {
  const stringEmpty = '';
  const dictionaryEntry = data.edges
    .filter(
      edge =>
        edge.node.elements.key.value === key &&
        edge.node.system.language === lang
    )
    .map(edge => edge.node)[0];

  if (!dictionaryEntry) {
    return stringEmpty;
  }

  return dictionaryEntry.elements.value.value || stringEmpty;
};
