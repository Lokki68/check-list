import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './context/globalStore'

import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment'
import 'moment/locale/fr'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='fr' >
      <React.StrictMode>
        <GlobalState>
          <App />
        </GlobalState>
      </React.StrictMode>
    </LocalizationProvider>
  </BrowserRouter>,
)
