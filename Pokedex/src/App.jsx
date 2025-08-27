import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/pokedex'
import CustomRoutes from './routes/Routes'

function App() {

  return (
    <>
      <Link to="/"><h1>Pokedex</h1></Link>
      <CustomRoutes />
    </>
  )
}

export default App
