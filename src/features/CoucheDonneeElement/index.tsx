import ShapeFileContainer from 'components/Cartographie/ShapeFileContainer';
import { AppContext } from 'providers';
import { useContext } from 'react';
import useCoucheDeDonnee from 'stores/useCoucheDeDonnee';

const CoucheDonneeElement = () => {
    const { coucheDeDonneesElementConfig } = useContext(AppContext);
    const { coucheDeDonneesSelectedListe } = useCoucheDeDonnee();

    return (
        <ShapeFileContainer
            coucheDeDonneesListe={coucheDeDonneesSelectedListe}
            showName={coucheDeDonneesElementConfig.showShapefileName}
            showPopUp={coucheDeDonneesElementConfig.showShapefilePopup}
        />
    )
}

export default CoucheDonneeElement