import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Accueil from './pages/Accueil'
import ListeArtisans from './pages/ListeArtisans'
import FicheArtisan from './pages/FicheArtisan'
import PageLegale from './pages/PageLegale'
import NotFound from './pages/NotFound'

// Composants
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/categorie/:id" element={<ListeArtisans />} />
          <Route path="/artisan/:id" element={<FicheArtisan />} />
          <Route path="/legal/:page" element={<PageLegale />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
