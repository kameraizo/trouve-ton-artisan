import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArtisan, sendEmail } from '../services/api'
import Etoiles from '../components/Etoiles'

function FicheArtisan() {
    const { id } = useParams()
    const [artisan, setArtisan] = useState(null)
    const [formulaire, setFormulaire] = useState({
        nom: '',
        email: '',
        objet: '',
        message: ''
    })

    useEffect(() => {
        getArtisan(id).then((response) => {
            setArtisan(response.data)
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmail({
            ...formulaire,
            destinataire: artisan.email
        }).then(() => {
            alert('Message envoyé !')
            setFormulaire({ nom: '', email: '', objet: '', message: '' })
        }).catch(() => {
            alert('Erreur lors de l\'envoi')
        })
    }

    return (
        <div className="container">
            <h2>{artisan?.nom}</h2>
            <Etoiles note={artisan?.note} />
            <p>{artisan?.Specialite?.nom}</p>
            <p>{artisan?.ville}</p>
            <p>{artisan?.a_propos}</p>
            {artisan?.site_web && <a href={artisan.site_web}>{artisan.site_web}</a>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Votre nom"
                    value={formulaire.nom}
                    onChange={(e) => setFormulaire({...formulaire, nom: e.target.value})}
                />
                <input
                    type="email"
                    placeholder="Votre email"
                    value={formulaire.email}
                    onChange={(e) => setFormulaire({...formulaire, email: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Objet"
                    value={formulaire.objet}
                    onChange={(e) => setFormulaire({...formulaire, objet: e.target.value})}
                />
                <textarea
                    placeholder="Votre message"
                    value={formulaire.message}
                    onChange={(e) => setFormulaire({...formulaire, message: e.target.value})}
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default FicheArtisan