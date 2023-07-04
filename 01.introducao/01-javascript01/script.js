const menu = {
  selector: '.principal',
};

console.log(menu.selector.toUpperCase());

// NORMAL FUNCTION
function upperName(name) {
  return name.toUpperCase();
}

// ARROW FUNCTION
const lowerName = (name) => {
  return name.toLowerCase();
};

console.log(upperName('William'));
console.log(lowerName('William'));

// DESTRUCTION
// function handleMouse(event) {
//   // DESTRUCTION
//   const { clientX, clientY } = event;

//   // // NORMAL WAY TO DO IT
//   // const x = event.clientX;
//   // const y = event.clientY;
//   // console.log(x, y);
// }

// OTHER WAY TO DESTRUCTION
function handleMouse({ clientX, clientY }) {
  console.log(`${clientX}, ${clientY}`);
}

document.addEventListener('click', handleMouse);

// ARRAY DESTRUCTION
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

// INTRODUCTION USEEFFECT
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

// REST (TRÊS PONTOS QUER DIZER REST(RESTANTE))
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Goggle', 'William', 'Bárbara');

// SPREAD
const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, ...numeros, 40, 35, 22];
console.log(numeros2);

// SPREAD WITH OBJECTS
const carro = {
  cor: 'Azul',
  portas: 4,
};

carroAno = {
  ...carro,
  ano: 2008,
};

console.log(carroAno);
