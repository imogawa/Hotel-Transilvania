import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';


const App = () => {
  return ( 
  <Router>
    <Header/>
    <div className='main'>
      <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </div>
  </Router>
  )
};

export default App;

