export const getItemPerLanguage = (language, edges, site) => {
  const items = new Array(...edges);
  const localizedItem = items.filter(page => page.node.system.language === language)[0];

  return {
    allEdges: items,
    elements: localizedItem.node.elements,
    fields: localizedItem.node.fields,
    site: site,
    system: localizedItem.node.system,
  };
};
