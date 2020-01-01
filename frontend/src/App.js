import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Painel from './pages/Painel';
import Turmas from './pages/Turmas';
import Alunos from './pages/Alunos';
import NovaTurma from './pages/NovaTurma';
import NovoAluno from './pages/NovoAluno';


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Route path="/" exact component={Painel} />
        <Route path="/turmas" component={Turmas} />
        <Route path="/alunos" component={Alunos}/>
        <Route path="/novaturma" component={NovaTurma}/>
        <Route path="/novoaluno" component={NovoAluno}/>
        <Footer/>       
      </div>
      </Router>
  );
}

export default App;