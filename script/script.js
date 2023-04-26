function calcular() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = 0;
    let sexo = document.getElementsByName("sexo");
  
    for (let i = 0; i < sexo.length; i++) {
      if (sexo[i].checked) {
        if (sexo[i].value == "masculino") {
          peso = 22 * (altura * altura);
        } else {
          peso = 21 * (altura * altura);
        }
      }
    }
  
    document.getElementById("resultado").innerHTML = "Seu peso ideal é " + peso.toFixed(2) + " kg.";
  }