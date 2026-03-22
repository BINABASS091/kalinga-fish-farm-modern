import { useEffect, useState } from 'react'
import Home from './pages/Home'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [showWelcome, setShowWelcome] = useState(() => {
    try {
      return window.sessionStorage.getItem('welcome-shown') !== '1'
    } catch {
      return true
    }
  })

  useEffect(() => {
    const redirectedPath = window.sessionStorage.getItem('spa-redirect-path')

    if (redirectedPath) {
      window.sessionStorage.removeItem('spa-redirect-path')
      window.history.replaceState(null, '', redirectedPath)
    }

    if (!showWelcome) return

    const timeoutId = window.setTimeout(() => {
      setShowWelcome(false)
      window.sessionStorage.setItem('welcome-shown', '1')
    }, 1200)

    return () => window.clearTimeout(timeoutId)
  }, [showWelcome])

  if (showWelcome) {
    return <WelcomeScreen />
  }

  return <Home />
}

export default App

