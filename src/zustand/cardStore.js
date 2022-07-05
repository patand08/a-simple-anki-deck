import create from "zustand";

export const useCardStore = create((set) => ({
  currentDeck: [],
  currentCard: 0,
  isFront: true,
  clear: true,

  clearDeck: () =>
    set((state) => ({
      currentDeck: [],
      currentCard: 0,
      isFront: true,
      clear: !state.clear,
    })),

  //Setdeck here
  setDeck: (newDeck) =>
    set({
      currentDeck: newDeck,
      currentCard: 0,
      isFront: true,
    }),

  nextCard: () =>
    set((state) => ({ currentCard: state.currentCard + 1, isFront: true })),
  previousCard: () =>
    set((state) => ({ currentCard: state.currentCard - 1, isFront: true })),

  flipCard: () => set((state) => ({ isFront: !state.isFront })),
}));
