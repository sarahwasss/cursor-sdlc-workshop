import { NavLink, Route, Routes } from 'react-router-dom'
import { MatchListPage } from './pages/MatchListPage.jsx'
import { MatchDetailPage } from './pages/MatchDetailPage.jsx'
import { ShapeLibraryPage } from './pages/ShapeLibraryPage.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavLink to="/" className="app-header__brand">
          <span className="app-header__mark" aria-hidden />
          <span>LFC Tactical Timeline</span>
        </NavLink>
        <nav className="app-header__nav" aria-label="Main">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link nav-link--on' : 'nav-link')}>
            Matches
          </NavLink>
          <NavLink
            to="/shapes"
            className={({ isActive }) => (isActive ? 'nav-link nav-link--on' : 'nav-link')}
          >
            Shape library
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<MatchListPage />} />
          <Route path="/match/:matchId" element={<MatchDetailPage />} />
          <Route path="/shapes" element={<ShapeLibraryPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          Prototype for workshop / PRD demo — data is fictional. Not affiliated with Liverpool FC.
        </p>
      </footer>
    </div>
  )
}
