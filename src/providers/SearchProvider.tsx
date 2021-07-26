import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export type SearchContextType = {
  searchMovieTitle: string;
  setSearchMovieTitle: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [searchMovieTitle, setSearchMovieTitle] = useState<string>('');
  return (
    <SearchContext.Provider value={{ searchMovieTitle, setSearchMovieTitle }}>
      {children}
    </SearchContext.Provider>
  );
};
