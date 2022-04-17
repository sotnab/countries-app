import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeContext } from './context/ThemeContext'
import Header from './components/Header'
import Countries from './components/Countries'
import Details from './components/Details'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Router>
      <div className={`App${theme === 'dark' ? ' App--dark' : ''}`}>
        <Header />

        <Routes>
          <Route path="/details/:name" element={<Details />} />
          <Route path="/" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App