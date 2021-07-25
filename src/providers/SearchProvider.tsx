import React, { createContext, ReactNode, useState } from 'react';

export const SearchContext = createContext({});

export const SearchProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [searchMovieTitle, setSearchMovieTitle] = useState<string | null>('');
  return (
    <SearchContext.Provider value={{ searchMovieTitle, setSearchMovieTitle }}>
      {children}
    </SearchContext.Provider>
  );
};
