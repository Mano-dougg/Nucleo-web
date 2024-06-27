'use client';
import React, { createContext, useState, ReactNode, useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const Favorites = styled.div`
  padding-top: 88px;
`;

interface FavoritesContextType {
  favorites: any[]; 
  addFavorite: (item: any) => void; 
  removeFavorite: (item: any) => void; 
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
FavoritesContext.displayName = "MyFavorites";

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (newFavorite: any) => { 

    const repeatedFavorite = favorites.some(item => item.id === newFavorite.id);

    let newList = [...favorites]

    if (!repeatedFavorite) {
      newList.push(newFavorite)
      return setFavorites(newList);
    }


    //se for repetid ele vai ser tirado da lista 
    newList = favorites.filter((fav) => fav.id !== newFavorite.id)
    return setFavorites(newList) 



  };

  const removeFavorite = (favoriteToRemove: any) => { 
    setFavorites(favorites.filter(item => item.id !== favoriteToRemove.id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
     
        {children}
      
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavoriteContext must be used within a FavoritesProvider");
  }
  return context;
}
