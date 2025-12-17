import ShapeFileContainer from 'components/Cartographie/ShapeFileContainer';
import useCoucheDeDonnee from 'stores/useCoucheDeDonnee';

const CoucheDonneeElement = () => {
    const { coucheDeDonneesSelectedListe, coucheDeDonneesElementConfig } = useCoucheDeDonnee();

    return (
        <ShapeFileContainer
            coucheDeDonneesListe={coucheDeDonneesSelectedListe}
            showName={coucheDeDonneesElementConfig.showShapefileName}
            showPopUp={coucheDeDonneesElementConfig.showShapefilePopup}
        />
    )
}

export default CoucheDonneeElement