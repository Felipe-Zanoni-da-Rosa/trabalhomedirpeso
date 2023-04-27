# Calculadora de peso ideal

Este é um projeto de uma calculadora de peso ideal que utiliza a fórmula de Lorentz para calcular o peso ideal de uma pessoa com base em sua altura, peso e gênero. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript.

## Funcionalidades

A calculadora permite que o usuário informe seu nome, altura, peso e gênero e, em seguida, calcula seu peso ideal de acordo com a fórmula de Lorentz. O resultado é exibido na tela informando se o peso atual da pessoa está abaixo, dentro ou acima do peso ideal, e quanto ela precisa ganhar ou perder para atingir o peso ideal.

## Como utilizar

Para utilizar a calculadora, basta preencher os campos de nome, altura, peso e gênero e clicar no botão "Calcular". O resultado será exibido na tela.

## Estrutura do projeto

O projeto é composto por três arquivos:

- `index.html`: arquivo HTML que contém a estrutura do projeto e os elementos da interface gráfica.
- `style.css`: arquivo CSS que contém os estilos aplicados aos elementos da interface gráfica.
- `script.js`: arquivo JavaScript que contém a lógica de cálculo do peso ideal e a atualização do resultado na tela.

## Funções JavaScript

A função `calcularPesoIdeal` é responsável por calcular o peso ideal com base nos dados informados pelo usuário e exibir o resultado na tela. A seguir, uma breve descrição do que cada trecho de código da função faz:

```js
function calcularPesoIdeal() {
  // busca o nome, altura, peso e gênero da pessoa nos campos de entrada do HTML
  const nome = document.getElementById("inNome").value;
  const altura = parseFloat(document.getElementById("inAltura").value) / 100; // a altura é convertida de cm para metros
  const peso = parseFloat(document.getElementById("inPeso").value);
  const genero = document.querySelector('input[name="gender"]:checked').value; // seleciona o valor do gênero marcado no formulário

  // inicializa as variáveis pesoIdeal e resultado
  let pesoIdeal = 0;
  let resultado = "";
  
  // calcula o peso ideal com base na fórmula de Lorentz, que varia de acordo com o gênero
  if (genero === "male") {
    pesoIdeal = 22 * altura ** 2;
  } else if (genero === "female") {
    pesoIdeal = 21 * altura ** 2;
  }
  
  // define o peso mínimo e máximo, que são 2 kg abaixo e acima do peso ideal, respectivamente
  const pesoMinimo = pesoIdeal - 2;
  const pesoMaximo = pesoIdeal + 2;
  
  // verifica se o peso informado é abaixo do peso mínimo ideal
  if (peso < pesoMinimo) {
    // calcula a diferença entre o peso atual e o peso mínimo ideal
    const diferenca = pesoMinimo - peso;

    // define a mensagem de resultado informando que a pessoa está abaixo do peso ideal e quantos quilos ela precisa ganhar para atingir o peso mínimo ideal
    resultado = `${nome}, seu peso ideal é entre ${pesoMinimo.toFixed(1)} kg e ${pesoMaximo.toFixed(1)} kg. Você está abaixo do peso ideal em ${diferenca.toFixed(1)} kg. Para atingir o peso ideal mínimo de ${pesoMinimo.toFixed(1)} kg, você precisa ganhar ${diferenca.toFixed(1)} kg.`;
  } else if (peso >= pesoMinimo && peso <= pesoMaximo) {
    // define a mensagem de resultado informando que a pessoa está dentro do peso ideal
    resultado = `${nome}, seu peso atual está entre o peso ideal mínimo de ${pesoMinimo.toFixed(1)} kg e o peso ideal máximo de ${pesoMaximo.toFixed(1)} kg.`;
  } else if (peso > pesoMaximo) {
    // calcula a diferença entre o peso atual e o peso máximo ideal
    const diferenca = peso - pesoMaximo;

    // define a mensagem de resultado informando que a pessoa está acima do peso ideal e quantos quilos ela precisa perder para atingir o peso máximo ideal
    resultado = `${nome}, seu peso ideal é entre ${pesoMinimo.toFixed(1)} kg e ${pesoMaximo.toFixed(1)} kg. Você está acima do peso ideal em ${diferenca.toFixed(1)} kg. Para atingir o peso ideal máximo de ${pesoMaximo.toFixed(1)} kg, você precisa perder ${diferenca.toFixed(1)} kg.`;
  }

  // exibe o resultado na tela
  document.getElementById("outResultado").textContent = resultado;
}
```

Essa parte do código verifica em qual faixa de peso o peso atual da pessoa se encontra e define a mensagem de resultado de acordo com isso. Se o peso atual estiver abaixo do peso mínimo ideal, a mensagem informará que a pessoa precisa ganhar uma certa quantidade de quilos para atingir o peso mínimo ideal. Se o peso atual estiver dentro da faixa de peso ideal, a mensagem informará que a pessoa está dentro do peso ideal. Se o peso atual estiver acima do peso máximo ideal, a mensagem informará que a pessoa precisa perder uma certa quantidade de quilos para atingir o peso máximo ideal.

Por fim, o resultado é exibido na tela utilizando o método `textContent` para atualizar o conteúdo do elemento com o id `outResultado`.