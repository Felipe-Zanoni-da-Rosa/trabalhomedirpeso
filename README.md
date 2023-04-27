# Peso Ideal

O **Peso Ideal** é um aplicativo web desenvolvido como um projeto para a disciplina de Desenvolvimento Web do curso de Tecnologia em Análise e Desenvolvimento de Sistemas do IFSP Campus Salto. O objetivo do aplicativo é auxiliar o usuário a calcular seu peso ideal de acordo com o seu perfil.

## Como usar

Para usar o aplicativo, basta acessar a página inicial. Nela, você encontrará um formulário que deverá ser preenchido com as seguintes informações:

- **Sexo:** selecione se você é masculino ou feminino.
- **Altura:** informe a sua altura em cm.
- **Peso:** informe o seu peso em Kg.
- **Nome** Informe seu nome.

Após preencher o formulário, clique no botão "Calcular" para obter o seu peso ideal. O resultado será exibido na tela.

## Autores

- Felipe Zanoni da Rosa
- Bryan Andrade

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Funções no código
Função calcularPesoIdeal()
==========================

Esta função é responsável por calcular o peso ideal com base na altura, peso e gênero informados pelo usuário. Ela é utilizada em uma aplicação web que possui campos de entrada para o nome, altura, peso e gênero da pessoa.

Parâmetros
----------
Nenhum parâmetro é passado para a função.

Retorno
-------
A função não retorna nenhum valor, mas exibe uma mensagem contendo o resultado do cálculo no elemento HTML com id "resultado".

Comportamento
-------------
1. A função busca o nome, altura, peso e gênero da pessoa nos campos de entrada do HTML.
2. A altura é convertida de centímetros para metros.
3. A função inicializa as variáveis pesoIdeal e resultado.
4. É calculado o peso ideal com base na fórmula de Lorentz, que varia de acordo com o gênero informado pelo usuário.
5. São definidos o peso mínimo e máximo, que são 2 kg abaixo e acima do peso ideal, respectivamente.
6. A função verifica se o peso informado é abaixo do peso mínimo ideal, acima do peso máximo ideal ou dentro da faixa do peso ideal.
7. São criadas mensagens informando o nome, o peso ideal e o quanto a pessoa precisa ganhar ou perder para atingir o peso ideal, dependendo do resultado da verificação anterior.
8. A mensagem de resultado é exibida no elemento HTML com id "resultado".

Exemplo de Uso
--------------
Para utilizar a função, basta chamá-la em um evento de clique em um botão ou em um evento de mudança de valor em um dos campos de entrada do formulário HTML. Por exemplo:

```html
<button onclick="calcularPesoIdeal()">Calcular</button>
```

```html
<input type="text" id="inNome">
<input type="number" id="inAltura">
<input type="number" id="inPeso">
<label><input type="radio" name="gender" value="male">Masculino</label>
<label><input type="radio" name="gender" value="female">Feminino</label>

<script>
function onChange() {
  calcularPesoIdeal();
}

document.getElementById("inNome").addEventListener("change", onChange);
document.getElementById("inAltura").addEventListener("change", onChange);
document.getElementById("inPeso").addEventListener("change", onChange);
document.querySelectorAll('input[name="gender"]').forEach((el) => {
  el.addEventListener("change", onChange);
});
</script>
```

Isso irá chamar a função calcularPesoIdeal() sempre que o botão "Calcular" for clicado ou quando o valor de um dos campos de entrada for alterado.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE.md para obter mais informações.
