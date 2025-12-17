import { getCoucheDonnee } from "functions/API";
import { COUCHE_DE_DONNEE_T, LOADING_STATE_T, SHAPE_OBJECT_T } from "types";
import { create } from "zustand";

interface instance_T {
    data: COUCHE_DE_DONNEE_T[];
    setdata: (value: COUCHE_DE_DONNEE_T[]) => void;
    loadData: () => void;
    loadingState: LOADING_STATE_T,
    coucheDonneIsAllCocher: boolean;
    setcoucheDonneIsAllCocher: (value: boolean) => void;
    coucheDeDonneesSelectedListe: SHAPE_OBJECT_T[];
    setcoucheDeDonneesSelectedListe: (value: SHAPE_OBJECT_T[]) => void;
}

export default create<instance_T>((set) => ({
    data: [],
    setdata: (value) => set({ data: value }),
    loadingState: null,
    loadData: async () => {
        set({ loadingState: 'En cours de chargement' });
        getCoucheDonnee()
            .then(data => data && set({ data }))
            .finally(() => set({ loadingState: null }));
    },
    coucheDonneIsAllCocher: false,
    setcoucheDonneIsAllCocher: (value) => set({ coucheDonneIsAllCocher: value }),
    coucheDeDonneesSelectedListe: [],
    setcoucheDeDonneesSelectedListe: (value) => set({ coucheDeDonneesSelectedListe: value }),
}));