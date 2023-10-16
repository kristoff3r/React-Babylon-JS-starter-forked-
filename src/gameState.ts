import { create } from "zustand";

interface GameState {
  score: number;
  actions: {
    changeScore: (change: number) => void;
    resetScore: () => void;
  };
}

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  actions: {
    changeScore: (change: number) =>
      set((state) => ({ score: state.score + change })),
    resetScore: () => set({ score: 0 }),
  },
}));
