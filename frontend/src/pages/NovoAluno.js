import React from 'react';

export default function turmas() {
  return (
    <div className="jumbotron">
      <h1>Cadastrar Aluno</h1>
      <form action="">
        <div className="form-group">
          <label for="nomeAluno">Nome Completo</label>
          <input className="form-control" type="text" placeholder="Fulano de Tal" id="nomeAluno" aria-describedby="NomeAluno" />
          <small id="NomeAluno" className="form-text text-muted" >Aqui deverá ser preenchido o nome completo do aluno</small>
        </div>
        <div><label for="turmaAluno">Turma
        </label>
          <select name="" id="turma" className="form-control">
            <option value="">AAC 1</option>
            <option value="">AAC 2</option>
          </select>  
        </div>
        <div><label for="alunoModulo">Módulo</label>
          <select name="" id="" className="form-control">
            <option value="aac">Aprendiz</option>
            <option value="aac">Controles</option>
            <option value="aac">Financeiro</option>
            <option value="aac">RH</option>
            <option value="inf">Projeto 1</option>
            <option value="inf">Projeto 2</option>
            <option value="inf">Projeto 3</option>
            <option value="inf">Projeto 4</option>
          </select>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button className="btn btn-secondary" type="reset">Refazer</button>
        </div>
      </form>
    </div>

  );


}