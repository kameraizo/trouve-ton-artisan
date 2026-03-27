import { useState, useEffect } from "react"             // importation des hooks
import { Link } from "react-router-dom"                 // importation de Link
import { getCategories } from "../services/api"        // importation de la fonction getCategories

function Header() {
    const [categories, setCategories] = useState([])                  // state pour stocker les catégories

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
            <input type="search" placeholder="Rechercher un artisan" />            {/* input de recherche */}
        </header>
       
    )}
    export default Header
