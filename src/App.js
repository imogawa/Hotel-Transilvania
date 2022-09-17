import React from 'react';
import Header from './components/Header/Header';
import Cadastro from './pages/Cadastro/Cadastro';


const App = () => {
  return ( 
  <>
    <Header/>
    <div className='main'>
      <Cadastro />
    </div> 
  </>
  )
};

export default App;

