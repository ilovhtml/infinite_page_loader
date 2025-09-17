import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MemeLoaderPlayground from './MemeLoaderPlayground.jsx'
// import Catloader from './Catloader.jsx'
createRoot(document.getElementById('root')).render(
  <MemeLoaderPlayground/>
  // <Catloader/>
    // <App />
)
