import React from 'react';
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">KN</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/"><i className="fas fa-home"></i> <br />Painel <span className="sr-only">(Página atual)</span></a>


          <div className="dropdown">
            <a className="nav-item nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" id="dropdownMenuLink" role="button" href="#">
              <i class="fas fa-graduation-cap"></i>
              <br />Turmas</a>

            <div className="dropdown-menu">
              <a href="/turmas" className="dropdown-item">Consultar</a>
              <a href="/novaturma" className="dropdown-item">Nova</a>
            </div>
          </div>



          <div className="dropdown">
            <a className="nav-item nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" id="dropdownMenuLink" role="button" href="#">
              <i class="fas fa-users"></i><br/>
              Alunos
            </a>
            <div className="dropdown-menu">
              <a class="dropdown-item" href="/alunos">Consultar</a>
              <a class="dropdown-item" href="/novoaluno">Novo</a>
            </div>

            
          </div>
          <a className="nav-item nav-link" href="#"><i className="fas fa-clipboard-list"></i><br />Planejamento</a>
            <a className="nav-item nav-link" href="#"><i className="fas fa-tasks"></i><br />Horários</a>
        </div>
        </div>
    </nav>
      );
}