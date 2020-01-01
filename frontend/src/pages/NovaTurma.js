import React from 'react';

export default function turmas() {
  return (
    <div className="jumbotron">
      <h1>Cadastrar Turma</h1>
      <form action="">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label for="nomeTurma" className="input-group-text">Turma</label>
          </div>

          <input className="form-control" type="text" placeholder="Assistente Administrativo 2" id="nomeTurma" aria-describedby="NomeAluno" />

        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label for="turmaModulo" className="input-group-text">Módulo</label>
          </div>
          <select name="" id="" className="custom-select" id="turmaModulo">
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


        <div className="card mx-auto" style={{borderRadius: 15, margin:0}}>
          <div className="card-header">
            <label for="">Dias de Aula</label>
          </div>
          <div className="card-body">
            <div className="form-check form-check-inline" >
              <input type="checkbox" name="" value="1" id="segunda" className="form-check-input" />
              <label for="segunda" className="form-check-label">Segunda-Feira</label>
            </div>
            <div className="form-check form-check-inline" >
              <input type="checkbox" name="" value="2" id="terca" className="form-check-input" />
              <label for="terca" className="form-check-label">Terça-Feira</label>
            </div>
            <div className="form-check form-check-inline" >
              <input type="checkbox" name="" value="3" id="quarta" className="form-check-input" />
              <label for="quarta" className="form-check-label">Quarta-Feira</label>
            </div>
            <div className="form-group ">
              <div className="form-check form-check-inline" >
                <input type="checkbox" name="" value="4" id="quinta" className="form-check-input" />
                <label for="quinta" className="form-check-label">Quinta-Feira</label>
              </div>
              <div className="form-check form-check-inline" >
                <input type="checkbox" name="" value="5" id="sexta" className="form-check-input" />
                <label for="sexta" className="form-check-label">Sexta-Feira</label>
              </div>
              <div className="form-check form-check-inline" >
                <input type="checkbox" name="" value="6" id="sabado" className="form-check-input" />
                <label for="sabado" className="form-check-label">Sábado</label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group"></div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="radModulo" id="tipoAac" value="aac" checked />
          <label className="form-check-label" for="tipoAac">
            Assistente Administrativo
  </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="radModulo" id="tipoInf" value="inf" />
          <label className="form-check-label" for="tipoInf">
            Informática Aplicada
  </label>
        </div>
        <div className="form-footer">
          <div className="btn-group mr-2" role="group">
            <button type="submit" className="btn btn-primary">Salvar</button>
          </div>
          <div className="btn-group mr-2" role="group">
            <button className="btn btn-secondary" type="reset">Refazer</button>
          </div>
        </div>
      </form>
    </div >

  );


}