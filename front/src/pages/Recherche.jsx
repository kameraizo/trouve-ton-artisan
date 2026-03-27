import {useSearchParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {searchArtisans} from "../services/api"
import CardArtisan from "../components/CardArtisan"

function Recherche(){                // fonction de recherche
const [searchParams] = useSearchParams()     // paramètres de recherche
const q = searchParams.get("q")            // valeur de la recherche
const [artisans, setArtisans] = useState([])    // state pour stocker les artisans

useEffect(() => {                 // appel de la fonction searchArtisans
    searchArtisans(q).then((response) => {         
        setArtisans(response.data)
    })
}, [q])

return (                    // retourne la liste des artisans
    <div className="container"> 
        <h2>Recherche</h2>
        <div className="cards">
            {artisans.map((artisan) => (
                <CardArtisan key={artisan.id} artisan={artisan} />
            ))}
        </div>
    </div>
)
}
export default Recherche
