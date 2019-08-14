import React from 'react';

const PageContext = React.createContext();
const initialState = {
  allEdges: [],
  elements: {
    jumbotron__description: {
      value: '',
    },
    jumbotron__image: {
      value: [
        {
          url: '',
          description: '',
        },
      ],
    },
    jumbotron__title: {
      value: '',
    },
    page_metadata__og_title: {
      value: '',
    },
    page_metadata__meta_description: {
      value: '',
    },
    page_metadata__meta_keywords: {
      value: '',
    },
    page_metadata__og_image: {
      value: [
        {
          url: '',
          description: '',
        },
      ],
    },
    page_metadata__og_description: {
      value: '',
    },
    slug: {
      value: '',
    },
  },
  fields: {
    jumbotronImage: {
      childImageSharp: {
        fluid: {},
      },
    },
    language: '',
    slug: '',
  },
  site: {
    siteMetadata: {
      title: '',
      siteUrl: '',
    },
  },
  system: {
    language: '',
    codename: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return action.playload;
    default:
      throw new Error();
  }
};

const PageProvider = props => {
  const [currentPage, dispatch] = React.useReducer(reducer, initialState);

  const value = React.useMemo(() => {
    return {
      currentPage,
      dispatch,
    };
  }, [currentPage]);

  return <PageContext.Provider value={value} {...props} />;
};

export { PageProvider, PageContext };
