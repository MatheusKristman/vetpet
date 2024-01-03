import { create } from "zustand";

interface headerStoreInter {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const useHeaderStore = create<headerStoreInter>((set) => ({
    isMenuOpen: false,
    openMenu: () => set({ isMenuOpen: true }),
    closeMenu: () => set({ isMenuOpen: false }),
}));

export default useHeaderStore;
