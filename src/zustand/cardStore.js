import create from "zustand";

export const useCardStore = create((set) => ({
  currentDeck: [],
  currentCard: 0,
  isFront: true,
  clear: true, //needed to shuffle deck if current card is 0

  clearDeck: () =>
    set((state) => ({
      currentDeck: [],
      currentCard: 0,
      isFront: true,
      clear: !state.clear,
    })),

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
