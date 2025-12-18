import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return (
    <h3>Hello from MyApp</h3>
  )
}

createRoot(document.getElementById('root')).render(

    <App />

)
