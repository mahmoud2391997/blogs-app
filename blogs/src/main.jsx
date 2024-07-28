import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import NavBar from './components/NavBar.jsx'
render(
<>
<NavBar/>
<App />
</>

, document.getElementById('app'))
