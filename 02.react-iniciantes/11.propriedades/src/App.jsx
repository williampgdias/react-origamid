import React from 'react';

// COMPONENTS
import Form from './Form/Form';

// PROPRIEDADE
// const Titulo = ({ cor, texto }) => {
//   return <h1 style={{ color: cor }}>{texto}</h1>;
// };

// CHILDREN
const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor='red' texto='Meu Título 1' />
      <Titulo cor='blue' texto='Meu Título 2' />
      <Titulo cor='pink' texto='Meu Título 3' />
      <Titulo texto='Meu Título com children'>Isso é o children</Titulo>

      {/* FORM */}
      <Form />
    </div>
  );
};

export default App;
