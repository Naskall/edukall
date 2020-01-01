import React from 'react';

export default function Turmas() {
  return (
    <div>
      <header>
        <h1>Controle de turmas</h1>
      </header>
      <div className="table-responsive-md">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Turma</th>
              <th scope="col">Módulo</th>
              <th scope="col">Alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><a href="#">Assistente Administrativo 1</a></td>
              <td>Aprendiz</td>
              <td>20</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Informática Aplicada 3</td>
              <td>Projeto 2</td>
              <td>18</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Informática Aplicada 1</td>
              <td>Projeto 1</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}