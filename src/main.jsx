import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.jsx'

createRoot(document.getElementById('root')).render(
  <I18nextProvider  i18n={i18n}  >
  <BrowserRouter>
  <div className="overflow-hidden" >
    <App />
  </div>

  </BrowserRouter>
  </I18nextProvider>
)
