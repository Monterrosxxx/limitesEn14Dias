import { useState } from 'react'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')

  const renderPage = () => {
    switch(currentPage) {
      case 'welcome':
        return <Welcome onNavigate={setCurrentPage} />
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      default:
        return <Welcome onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App