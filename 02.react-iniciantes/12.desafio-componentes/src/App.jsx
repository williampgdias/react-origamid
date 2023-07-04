// REPLIQUE A INTERFACE COMO A APRESENTADA NA AULA
// UTILIZE A ARRAY ABAIXO PARA MOSTRAR OS PRODUTOS
// QUEBRE EM COMPONENTES O QUE PRECISAR SER REUTILIZADO
// DICA: const {pathname} = window.location; (PUXA O CAMINHO DO ARQUIVO DO URL)

import React from 'react';

// COMPONENTES
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
