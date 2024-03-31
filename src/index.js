import reportWebVitals from './reportWebVitals'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Weather from './Weather'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Weather />
        <footer>
            <p>
                This code is open-sourced on{' '}
                <a href="https://github.com/Harweeeee/weather-app">GitHub</a>,
                written by{' '}
                <a href="https://github.com/Harweeeee">Harleigh Gallant</a> and
                hosted on{' '}
                <a href="https://solstice-sky-react.netlify.app/">Netlify</a>
            </p>
        </footer>
    </StrictMode>
)

reportWebVitals()
