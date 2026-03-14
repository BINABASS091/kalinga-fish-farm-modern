import { useEffect, useState } from 'react'
import Home from './pages/Home'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const redirectedPath = window.sessionStorage.getItem('spa-redirect-path')

    if (redirectedPath) {
      window.sessionStorage.removeItem('spa-redirect-path')
      window.history.replaceState(null, '', redirectedPath)
    }

    const timeoutId = window.setTimeout(() => {
      setShowWelcome(false)
    }, 2800)

    return () => window.clearTimeout(timeoutId)
  }, [])

  if (showWelcome) {
    return <WelcomeScreen />
  }

  return <Home />
}

export default App

