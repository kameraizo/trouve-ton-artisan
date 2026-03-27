import {Link} from "react-router-dom";     // importation de Link
import Etoiles from "./Etoiles";          // importation de Etoiles


function CardArtisan({ artisan }) {          // fonction CardArtisan
    return (
        <Link to={`/artisan/${artisan.id}`}>    {/* lien vers la fiche de l'artisan*/}
        <div className="card">
            <h3>{artisan.nom}</h3>               {/* affichage du nom de l'artisan*/}
            <p>{artisan.ville}</p>                   {/* affichage de la ville de l'artisan*/}
            <p>{artisan.Specialite.nom}</p>          {/* affichage de la specialite de l'artisan*/}
            <Etoiles note={artisan.note} />          {/* affichage des etoiles de l'artisan*/}
        </div>
        </Link>
    );
}
export default CardArtisan