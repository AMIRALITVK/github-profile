import React, { useState } from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Stats from './components/Stats';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.className = newTheme
  }

  return (
    <div className={`app ${theme}`}>
      <header style={{ textAlign: 'center', padding: '2rem' }}>
        <Intro />
        <button onClick={toggleTheme} style={{ marginTop: '1rem' }}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>
      <main style={{ textAlign: 'center' }}>
        <Stats />
        <Projects />
      </main>
    </div>
  )
}

export default App
