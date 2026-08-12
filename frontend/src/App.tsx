import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { DonateProvider } from './components/DonateContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ImpactPage from './pages/ImpactPage'
import DonatePage from './pages/DonatePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <DonateProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </DonateProvider>
  )
}

export default App