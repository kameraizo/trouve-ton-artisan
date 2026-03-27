import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArtisan } from '../services/api'
import Etoiles from '../components/Etoiles'



function FicheArtisan() {
    const { id } = useParams()
    const [artisan, setArtisan] = useState(null)
    

    useEffect(() => {
        getArtisan(id).then((response) => {
            setArtisan(response.data)
        })
    }, [id])


    return (
        <div className="container">
            <h2>{artisan?.nom}</h2>
            <Etoiles note={artisan?.note} />
            <p>{artisan?.Specialite?.nom}</p>
            <p>{artisan?.ville}</p>
            <p>{artisan?.a_propos}</p>
            {artisan?.site_web && <a href={artisan.site_web}>{artisan.site_web}</a>}
            <form>
                <input type="text" placeholder="Votre nom" />
                <input type="email" placeholder="Votre email" />
                <input type="text" placeholder="Objet" />
                <textarea placeholder="Votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
export default FicheArtisan