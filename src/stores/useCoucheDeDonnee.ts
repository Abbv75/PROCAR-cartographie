import { SHAPE_OBJECT_T } from "types";
import { coucheDeDonneesElementConfig_T } from "types/AppT";
import { create } from "zustand";

interface instance_T {
    coucheDeDonneesSelectedListe: SHAPE_OBJECT_T[];
    setcoucheDeDonneesSelectedListe: (value: SHAPE_OBJECT_T[]) => void;
    coucheDeDonneesElementConfig: coucheDeDonneesElementConfig_T;
    setcoucheDeDonneesElementConfig: (value: coucheDeDonneesElementConfig_T) => void;
}

export default create<instance_T>((set) => ({
    coucheDeDonneesSelectedListe: [],
    setcoucheDeDonneesSelectedListe: (value) => set({ coucheDeDonneesSelectedListe: value }),
    coucheDeDonneesElementConfig: {
        showShapefileName: true,
        showShapefilePopup: false
    },
    setcoucheDeDonneesElementConfig: (value) => set({ coucheDeDonneesElementConfig: value }),
}));