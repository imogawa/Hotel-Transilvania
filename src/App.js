import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import Sobre from './pages/Sobre/Sobre';
import Home from './pages/Home/Home';
import Time from './pages/Time/Time';
import RecuperacaoSenha from './pages/RecuperacaoSenha/RecuperacaoSenha';



const App = () => {
  return ( 
  <Router>
    <Header/>
    <div className='main'>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/time' element={<Time/>} />
          <Route path='/recupera' element={<RecuperacaoSenha />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  )
};

export default App;

