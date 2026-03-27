import {Link} from "react-router-dom";    // importation de Link

function Footer() {                    
    return (
        <footer className="container">
            <nav>
            <Link to="/legal">Mentions legales</Link>                       {/* lien vers les mentions legales */}
            <Link to ="/legal/donnees-personnelles">Données personnelles</Link>          {/* lien vers les donnees personnelles */}
            <Link to ="/legal/accessibilite">Accessibilité</Link>                     {/* lien vers l'accessibilite */}
            <Link to ="/legal/cookies">Cookies</Link>                               {/* lien vers les cookies */}
            </nav>
            <address>101 cours Charlemagne
                    CS 20033
                    69269 LYON CEDEX 02
                    France
                    Tel: 04 26 73 40 00
            </address>
        </footer>
    )
}

export default Footer