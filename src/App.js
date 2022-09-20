import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import Reservas from './pages/Reservas/Reservas';
import Sobre from './pages/Sobre/Sobre';


const App = () => {
  return ( 
  <Router>
    <Header/>
    <div className='main'>
      <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/reservas' element={<Reservas />} />
      </Routes>
    </div>
  </Router>
  )
};

export default App;

