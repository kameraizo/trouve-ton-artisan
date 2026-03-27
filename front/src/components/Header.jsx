import { useState, useEffect } from "react"             // importation de useState
import { getCategories } from "../services/api"         // importation de la fonction getCategories
import {Link, useNavigate} from "react-router-dom"    //    importation de Link

function Header() {
    const [categories, setCategories] = useState([])  // state pour stocker les catégories
    const navigate = useNavigate()
    const [recherche, setRecherche] = useState('')    // state pour stocker la recherche              
    const handleRecherche = (e) => {                          // fonction de recherche
        if (e.key === 'Enter') {                          // si la touche entre est appuyée
            navigate(`/recherche?q=${recherche}`)             // rediriger vers la liste des artisans
        }    
    }    
    useEffect(() => {
        getCategories().then((response) => {                    // appel de la fonction getCategories
            setCategories(response.data)                       // mise a jour du state
        })
    }, [])

    return (                                                    // retourne le header
        <header className="container">                             
            <Link to="/">
                <h1>Artisans</h1>
            </Link>
            <nav>
                <Link to="/artisans">Tous les artisans</Link>         {/* lien vers la liste des artisans*/}
                <ul>
                    {categories.map((categorie) => (                    // boucle sur les catégories
                        <li key={categorie.id}>
                            <Link to={`/categorie/${categorie.id}`}>{categorie.nom}</Link>     
                        </li>
                    ))}
                </ul>
            </nav> 
            <input
            type="search" 
            placeholder="Rechercher un artisan"           
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            onKeyDown={handleRecherche}
            />
        </header>
       
    )}
    export default Header
