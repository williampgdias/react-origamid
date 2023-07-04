// MODULES
// import quadrado from './quadrado.js';
// import numeroAleatorio from './numeroAleatorio.js';

// console.log(quadrado.areaQuadrado(5));
// console.log(quadrado.perimetroQuadrado(5));

// console.log(numeroAleatorio());

// FETCH
// fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// ASYNC / AWAIT
// async function fetchProdutos(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   console.log(json);
//   return json;
// }

// const produtos = fetchProdutos(
//   'https://ranekapi.origamid.dev/wp-json/api/produto',
// );

// FILTER
const precos = [
  'Crédito',
  '€200',
  '€400',
  'Contas Pagar',
  '€300',
  '€400',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => preco.includes('€'));

console.log(precosFiltro);

// MAP
const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('€', '')),
);
console.log(precosNumeros);
