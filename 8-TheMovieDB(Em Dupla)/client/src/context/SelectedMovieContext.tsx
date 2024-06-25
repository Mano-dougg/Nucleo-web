"use client";

import React, { createContext, useState, useContext } from 'react';
import { Movie } from '@/types/types';

interface SelectedMovieContextProps {
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie) => void;
}

const SelectedMovieContext = createContext<SelectedMovieContextProps | undefined>(undefined);

export const SelectedMovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </SelectedMovieContext.Provider>
  );
};

export const useSelectedMovie = () => {
  const context = useContext(SelectedMovieContext);
  if (!context) {
    throw new Error('useSelectedMovie must be used within a SelectedMovieProvider');
  }
  return context;
};
