function Etoiles({ note }) {         // fonction Etoiles
  return (                            // retourne les etoiles
    <span>
      {[1, 2, 3, 4, 5].map((i) => (     // boucle sur les etoiles   {/* affichage des etoiles */}
        <span key={i}>{i <= note ? '⭐' : '☆'}</span>      
      ))}
    </span>
  )
}

export default Etoiles