import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landingpage from './Components/landingpage'
import App from './components2/App'
// import App,{ BringPizza,Offline } from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>

<App/>

  </StrictMode>,

)
