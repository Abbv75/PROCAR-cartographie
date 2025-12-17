import { SHAPE_OBJECT_T } from "types";
import { create } from "zustand";

interface instance_T {
    coucheDeDonneesSelectedListe: SHAPE_OBJECT_T[];
    setcoucheDeDonneesSelectedListe: (value: SHAPE_OBJECT_T[]) => void;
}

export default create<instance_T>((set) => ({
    coucheDeDonneesSelectedListe: [],
    setcoucheDeDonneesSelectedListe: (value) => set({ coucheDeDonneesSelectedListe: value }),
}));