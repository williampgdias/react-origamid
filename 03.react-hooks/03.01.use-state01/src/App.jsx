import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);

  // const [ativo, setAtivo] = React.useState(true);
  // const [dados, setDados] = React.useState({ nome: 'William', idade: '34' });

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Não possui Faculdade' });
  // }

  return (
    <div>
      <div>{modal ? 'Modal Aberto' : 'Modal fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );

  // let ativo = true;

  // function handleClick() {
  //   ativo = !ativo;
  //   console.log(ativo);
  // }

  // return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default App;
