import { useState,useEffect } from 'react'
import Toggle from './components/toggle'
import Card from './components/card'
import { ThemeProvider } from './context/theameSwither'

import './App.css'


function App() {
  const [theameMode,setTheameMode] = useState("light")

  const LightTheame=()=>{
    setTheameMode('light')
  }

  const darkTheame=()=>{
    setTheameMode('dark')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theameMode);
  },[theameMode])

  return (
      <ThemeProvider value={{theameMode, LightTheame, darkTheame}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Toggle />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
