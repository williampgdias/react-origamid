import React from 'react';

const App = () => {
  const styleButton = {
    marginRight: '10px',
  };
  // function handleClick(e) {
  //   console.log(e.target);
  // }

  function handleScroll(e) {
    console.log(e);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div style={{ height: '200vh' }}>
      <button
        style={styleButton}
        onClick={(e) => console.log(e)}
        // onMouseMove={handleClick}
      >
        Clique
      </button>
      <button onClick={(e) => alert(e.target.innerText)}>Compre Violão</button>
    </div>
  );
};

export default App;
