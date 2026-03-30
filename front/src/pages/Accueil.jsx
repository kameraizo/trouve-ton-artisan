import { useState, useEffect } from "react"
import { getArtisansTop } from "../services/api"
import  CardArtisan  from "../components/CardArtisan"
function Accueil() {
    const [artisansTop, setArtisansTop] = useState([])

    useEffect(() => {
        getArtisansTop().then((response) => {
            setArtisansTop(response.data)
        })
    }, [])

    return <div className="container">
    <section>
        <h2>Comment trouver un artisan</h2>
        <div className="etapes">
            <div>
                <span>1</span>
                <p>Choisir la categorie d'artisan</p>
            </div>
            <div>
                <span>2</span>
                <p>choisir un artisan</p>
            </div>
            <div>
                <span>3</span>
                <p>Le contacter via le formualaire</p>
            </div>
            <div>
                <span>4</span>
                <p>Une reponse sera apporté sous 48h</p>
            </div>
            
        </div>
    </section>
    <section>
        <h2>les artisans du mois</h2>
        <div className="cards">
            {artisansTop.map((artisan) => (
                <CardArtisan key={artisan.id} artisan={artisan} />
            ))}
        </div>
    </section>
    
    </div>
}
export default Accueil