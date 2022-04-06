let operacao;
        let resultado;
        let entrada = document.getElementById("resultado");

        function limpar() {
            console.log(resultado);
            entrada.value = '';
        }

        function zerar() {
            resultado = undefined;
            operacao = undefined;
            entrada.value = '';
        }

        function passarValor(number) {
            entrada.value += number;
        }

        function somar() {

            if (resultado == undefined) {
                resultado = parseInt(entrada.value);
            } else {
                resultado += parseInt(entrada.value);
            }
            operacao = "somar";
            limpar();
        }

        function subtrair() {
            if (resultado == undefined) {
                resultado = parseInt(entrada.value);
            } else {
                resultado -= parseInt(entrada.value);
            }
            operacao = "subtrair";
            limpar();
        }

        function multiplicacao() {
            if (resultado == undefined) {
                resultado = parseInt(entrada.value);
            } else {
                resultado *= parseInt(entrada.value);
            }
            operacao = "multiplicar";
            limpar();
        }

        function divisao() {
            if (resultado == undefined) {
                resultado = parseInt(entrada.value);
            } else {
                resultado /= parseInt(entrada.value);
            }
            operacao = "dividir";
            limpar();
        }

        function calcular() {
            switch (operacao) {
                case "somar":
                    somar();
                    let soma = resultado;
                    entrada.value = resultado;
                    break;

                case "subtrair":
                    subtrair();
                    let diminuir = resultado;
                    entrada.value = resultado;
                    break;

                case "multiplicar":
                    multiplicacao();
                    let multiplicar = resultado;
                    entrada.value = resultado;
                    break;

                case "dividir":
                    divisao();
                    let dividir = resultado;
                    entrada.value = resultado;
                    break;
            }
        }