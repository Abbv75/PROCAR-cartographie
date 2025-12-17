import { Box, Button, ButtonGroup, Checkbox, LinearProgress, Sheet, Stack } from "@mui/joy";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../providers";
import { SHAPE_OBJECT_T } from "types";
import { REACT_APP_SHAPE_FILE_URL } from "constant";
import useGeoCatalogueStore from "stores/useGeoCatalogueStore";
import useCoucheDeDonnee from "stores/useCoucheDeDonnee";

const Geocatalogue = () => {
    const {
        setlegendeSection,
        setshowShapeFileColorEditer,
        setShapeFileColorEditerDefaultValues,
        setShapeFileColorEditerSubmitFunction
    } = useContext(AppContext);

    const {
        coucheDeDonneesSelectedListe,
        setcoucheDeDonneesSelectedListe
    } = useCoucheDeDonnee();

    const {
        data,
        setdata,
        loadData,
        loadingState,
        coucheDonneIsAllCocher,
        setcoucheDonneIsAllCocher,
    } = useGeoCatalogueStore();


    /** Toggle (activer/désactiver) une couche */
    const toogleElementInCoucheDonnesListe = (element: SHAPE_OBJECT_T) => {
        const value = ()=> {
            const exists = coucheDeDonneesSelectedListe.find((item: SHAPE_OBJECT_T) => item.name === element.name);
            if (exists) {
                return coucheDeDonneesSelectedListe.filter((item: SHAPE_OBJECT_T) => item.name !== element.name);
            } else {
                return [...coucheDeDonneesSelectedListe, element];
            }
        }
        setcoucheDeDonneesSelectedListe(value());
    };

    /** Tout cocher ou décocher */
    const toutCocherHandle = () => {
        if (coucheDonneIsAllCocher) {
            setcoucheDeDonneesSelectedListe([]);
        } else {
            const all: SHAPE_OBJECT_T[] = data.map((value) => ({
                name: value.nom_zone,
                filePath: `${REACT_APP_SHAPE_FILE_URL}/${value.shapefile}`,
                couleur: value.couleur,
                couleur_c: value.couleur_c,
                metaData: {
                    "Nom de la Zone": value.nom_zone,
                    "Description de la Zone": value.description ?? '-',
                    "Superficie": value.superficie,
                }
            }));
            setcoucheDeDonneesSelectedListe(all);
        }
        setcoucheDonneIsAllCocher(!coucheDonneIsAllCocher);
    };

    // pour modifier les couleurs
    const handleEdition = async (index: number) => {
        try {
            setshowShapeFileColorEditer(true);
            setShapeFileColorEditerDefaultValues({
                backgroundColor: data[index].couleur,
                borderColor: data[index].couleur_c
            });

            const editionFunction = (borderColor?: string, backgroundColor?: string, reset?: boolean) => {

                if (!reset) {
                    setdata(data.map((item, idx) => {
                        if (idx === index) {
                            return {
                                ...item,
                                couleur: backgroundColor || item.couleur,
                                couleur_c: borderColor || item.couleur_c
                            }
                        }
                        return item;
                    }))
                } else {
                    setdata(data.map((item, idx) => {
                        if (idx === index) {
                            return {
                                ...item,
                                couleur: data[index].couleur,
                                couleur_c: data[index].couleur_c
                            }
                        }
                        return item;
                    }))
                }
                setshowShapeFileColorEditer(false);
            }

            setShapeFileColorEditerSubmitFunction(() => editionFunction);
        } catch (error) {

        }
    }

    /** Mettre à jour la légende */
    useEffect(() => {
        if (coucheDeDonneesSelectedListe.length > 0) {
            const content = (
                <Stack gap={0.5}>
                    {coucheDeDonneesSelectedListe.map((item: SHAPE_OBJECT_T, idx: number) => {
                        return (
                            <Stack key={idx} direction="row" alignItems="center" gap={0.5}>
                                <Box sx={{
                                    width: 10,
                                    aspectRatio: 1,
                                    bgcolor: item.couleur,
                                    border: `2px solid ${item.couleur_c || item.couleur}`
                                }} />
                                <span style={{ fontSize: 12 }}>{item.name}</span>
                            </Stack>
                        )
                    })}
                </Stack>
            );

            setlegendeSection((prev: any) => ({
                ...prev,
                coucheDeDonnee: content
            }));
        } else {
            setlegendeSection((prev: any) => ({
                ...prev,
                coucheDeDonnee: undefined
            }));
        }
    }, [coucheDeDonneesSelectedListe, setlegendeSection]);



    useEffect(() => {
        loadData();
    }, []);

    if (loadingState) {
        return (
            <LinearProgress />
        )
    }

    return (
        <Stack
            gap={1}
        >
            {/* Tout cocher */}
            <Sheet variant="outlined" sx={{ p: 1, borderRadius: 10, display: 'flex' }}>
                <Checkbox
                    checked={coucheDonneIsAllCocher}
                    onChange={toutCocherHandle}
                    label={"Tout cocher"}
                    overlay
                />
            </Sheet>

            <ButtonGroup
                orientation="vertical"
                variant="soft"
            >
                {data.map((value, index) => {
                    const isSelected = coucheDeDonneesSelectedListe.find((item: SHAPE_OBJECT_T) => item.name === value.nom_zone);

                    return (
                        <Button
                            key={index}
                            variant={isSelected ? "solid" : "soft"}
                            onClick={() => toogleElementInCoucheDonnesListe({
                                name: value.nom_zone,
                                filePath: `${REACT_APP_SHAPE_FILE_URL}/${value.shapefile}`,
                                couleur: value.couleur,
                                couleur_c: value.couleur_c,
                                metaData: {
                                    "Nom de la Zone": value.nom_zone,
                                    "Description de la Zone": value.description ?? '-',
                                    "Superficie": value.superficie,
                                }
                            })}
                            color={isSelected ? "success" : "neutral"}
                            size="sm"
                            sx={{ fontSize: 12 }}
                            startDecorator={<Box
                                sx={{
                                    width: 10,
                                    aspectRatio: 1,
                                    bgcolor: value.couleur,
                                    border: `2px solid ${value.couleur_c || value.couleur || 'black'}`
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEdition(index);
                                }}
                            />}
                        >
                            <p style={{ width: '100%', textAlign: "left" }}>{value.nom_zone}</p>
                        </Button>
                    );
                })}
            </ButtonGroup>
        </Stack>
    );
};

export default Geocatalogue;
