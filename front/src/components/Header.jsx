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

return (
    <header>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#00497c'}}>
            <div className="container">
                <Link className="navbar-brand text-white fw-bold" to="/">Artisans</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {categories.map((categorie) => (
                            <li className="nav-item" key={categorie.id}>
                                <Link className="nav-link text-white fw-bold" to={`/categorie/${categorie.id}`}>{categorie.nom}</Link>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="search"
                        className="form-control w-auto"
                        placeholder="Rechercher un artisan"
                        value={recherche}
                        onChange={(e) => setRecherche(e.target.value)}
                        onKeyDown={handleRecherche}
                    />
                </div>
            </div>
        </nav>
    </header>
)
}
    export default Header
