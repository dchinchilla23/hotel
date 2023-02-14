import im1 from './im1.jpg';
import './App.css';
import React,{Fragment} from 'react';
import Crudapp from './Components/crud';

function App() {
  const formulario = () => { 


    
  }




  return (
    <div className="App">
      <header className="App-header">

        <h1>formulario de reservas</h1>
      
        <form>
          <input
            name="titulo"
            className='form-control my-2 '
          />
          <button className='btn btn-primary'>Enviar</button>
          <Crudapp/>
          <img src={im1}/>
         
        </form>
      </header>
    </div>
  );
}

export default App;
