// import React from 'react';

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const randomNumber = Math.random() * 100;
  const ativo = true;

  function mostrarNome(sobrenome) {
    return 'William' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: 4,
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <>
      {titulo}
      <a className='ativo' href='https://origamid.com' title='Isso é um site'>
        Origamid
      </a>

      <label htmlFor='nome'>Nome</label>
      <input type='text' id='nome' />

      <p className={ativo ? 'ativo' : 'inativo'}>{Math.round(randomNumber)}</p>

      <p>
        {true ? 'asddsa' : 'qweewq'} - {10}
      </p>
      <p>{mostrarNome('Dias')}</p>

      <p style={estiloP}>{new Date().getFullYear()}</p>

      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
    </>
  );
};

export default App;
