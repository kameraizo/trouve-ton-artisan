import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArtisansByCategorie } from "../services/api"
import CardArtisan from "../components/CardArtisan"



function ListeArtisans() {
const { id } = useParams()
const [artisans, setArtisans] = useState([])

useEffect(() => {
    getArtisansByCategorie(id).then((response) => {
        setArtisans(response.data)
    })
}, [id])

    return (
        <div className="container">
            <h2>{id}</h2>
            <div className="cards">
                {artisans.map((artisan) => (
                    <CardArtisan key={artisan.id} artisan={artisan} />
                ))}
            </div>
        </div>
    )
}
export default ListeArtisans