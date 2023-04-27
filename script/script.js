// esta função calcula o peso ideal com base na altura, peso e gênero informados
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
    const pesoFaltante = pesoMinimo - peso;
    // cria uma mensagem informando o nome, o peso ideal e o quanto a pessoa precisa ganhar para atingir o peso ideal
    resultado = `${nome}, seu peso está abaixo do ideal. Seu peso ideal é ${pesoIdeal.toFixed(2)}kg mas pode estar entre ${pesoMinimo.toFixed(2)}kg e ${pesoMaximo.toFixed(2)}kg. Você precisa ganhar ${Math.abs(pesoFaltante.toFixed(2))} kg para atingir o peso ideal.`;
  } else if (peso > pesoMaximo) {
    // calcula a diferença entre o peso atual e o peso máximo ideal
    const pesoExcedente = peso - pesoMaximo;
    // cria uma mensagem informando o nome, o peso ideal e o quanto a pessoa precisa perder para atingir o peso ideal
    resultado = `${nome}, seu peso está acima do ideal. Seu peso ideal é ${pesoIdeal.toFixed(2)}kg mas pode estar entre ${pesoMinimo.toFixed(2)}kg e ${pesoMaximo.toFixed(2)} kg. Você precisa perder ${pesoExcedente.toFixed(2)} kg para atingir o peso ideal.`;
  } else {
    // cria uma mensagem informando o nome e que o peso atual está dentro do peso ideal
    resultado = `${nome}, seu peso está dentro do ideal. Seu peso ideal é ${pesoIdeal.toFixed(2)}kg.`;
  }

  // exibe a mensagem de resultado no elemento HTML com id "resultado"
  document.getElementById("fim").textContent = resultado;
}
