import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './providers/language.jsx'
import { BrowserRouter } from 'react-router'
import store from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
                <LanguageProvider>
                        <BrowserRouter>
                                        <StrictMode>
                                                <App />
                                        </StrictMode>
                        </BrowserRouter>
                </LanguageProvider>
        </Provider>
        ,
)
