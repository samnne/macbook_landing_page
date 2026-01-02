import { create } from "zustand";

export const useMacbookStore = create((set) => {
  return {
    color: "#2e2c2e",
    setColor: (color) => set({ color }),
    scale: 0.08,
    setScale: (scale) => set({scale}),
    reset: () => set({scale: 0.08, color: "#2e2c2e"})    
};
});
