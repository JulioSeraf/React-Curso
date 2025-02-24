import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  //Apartir de la version 18 de react ,REACT ativa StrictMode por defecto en vite y create-react-app
  <App/>
)
