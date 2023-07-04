import React from 'react';

const App = () => {
  // const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  // return (
  //   <ul>
  //     {filmes.map((filme) => (
  //       <li key={filme}>{filme}</li>
  //     ))}
  //   </ul>
  // );

  const livros = [
    { nome: 'Game of Thrones', ano: 1996 },
    { nome: 'Clash of Kings', ano: 1998 },
    { nome: 'Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
