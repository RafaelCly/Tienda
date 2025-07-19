import './App.css'
import Navbar from './Components/navbar.jsx';
import Home from './routes/home/home.jsx';
import { Routes,Route } from 'react-router-dom';
import Usuario from './routes/usuario/usuario.jsx';
import Catalogo from './routes/catalogo/catalogo.jsx';

function App() {

  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </main>
    </>
  )
}

export default App
