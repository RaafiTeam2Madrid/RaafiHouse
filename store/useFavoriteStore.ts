import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

// Perhatikan kata 'export' di bawah ini, jangan sampai ketinggalan!
export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        })),
    }),
    { 
      name: 'property-storage',
    }
  )
);