import './styles/App.scss'
import { ToastContainer } from 'react-toastify'

import MoviesContextProvider from 'contexts/MoviesContext'

import RoutesApp from './routes'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <MoviesContextProvider>
        <RoutesApp />
      </MoviesContextProvider>
    </div>
  )
}

export default App
