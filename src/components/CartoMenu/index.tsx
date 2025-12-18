import { Stack } from '@mui/joy'
import EnteteZone from './EnteteZone'
import { Collapse } from '@mui/material'
import { useMemo, useState } from 'react'
import { CartoMenuContext } from '../../providers'
import { CARTO_MENU_EN_TETE_ZONE } from 'constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

const CartoMenu = () => {
    const [currentMenu, setcurrentMenu] = useState(CARTO_MENU_EN_TETE_ZONE[0]);
    const [cartoMenuIsOpen, setcartoMenuIsOpen] = useState(false);

    const pane = useMemo(() => {
        setcartoMenuIsOpen(true);
        return <currentMenu.children />
    }, [currentMenu]);

    return (
        <CartoMenuContext.Provider
            value={{
                currentMenu: currentMenu,
                setcurrentMenu: setcurrentMenu,
                setcartoMenuIsOpen: setcartoMenuIsOpen,
                cartoMenuIsOpen: cartoMenuIsOpen
            }}
        >
            <Stack
                position={"fixed"}
                bottom={10}
                left={10}
                zIndex={1000}
            >
                <EnteteZone />

                <Collapse
                    in={cartoMenuIsOpen}
                    sx={{
                        bgcolor: currentMenu.color[200],
                        p: 1,
                        borderRadius: '13px',
                        borderTopLeftRadius: 0,
                        border: `2px solid ${currentMenu.color[900]}`,
                        width: 330
                    }}
                >
                    <Stack
                        gap={1}
                    >
                        <FontAwesomeIcon
                            icon={faArrowAltCircleDown}
                            style={{
                                alignSelf: "flex-end",
                                color: "white",
                                cursor: "pointer"
                            }}
                            onClick={() => { setcartoMenuIsOpen(!cartoMenuIsOpen) }}
                        />
                        {pane}
                    </Stack>
                </Collapse>
            </Stack>
        </CartoMenuContext.Provider>
    )
}

export default CartoMenu