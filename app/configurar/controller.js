;(function () {
  "use strict";

  angular
    .module("configurar.controller", [])
    .controller("Configurar", Configurar)
  ;

  function Configurar(
      $location

    /**
     * personalizados
     */
    , Guia
    , Processo
    , Utilitarios
  ) {
    var vm = this;

    /**
     * funções
     * -------
     */
    vm.ler = ler;

    ///

    function ler() {
      var processos = vm.processos;

      if (
           processos
        && vm.carga
        && vm.lacre
        && vm.malote
        && vm.destinatario
      ) {
        processos = processos
          .split("\n")
          .filter(function (numero) {
            var eh = Processo.eh(numero);

            if (!eh) {
              alert("O número \"" + numero +  "\" é inválido!");
            }

            return eh;
          })
          .map(function (numero) {
            return Processo.formatar(numero);
          })
          .map(function (numero, indice, array) {
            return [
                numero
              , Utilitarios.contarRepetidos(numero, array)
            ];
          })
        ;

        processos = Utilitarios.removerRepetidos(processos)
          .map(function (array) {
            array[1] = Utilitarios.completarComZeros(array[1]);

            return array;
          })
          .map(function (array, indice) {
            return [Utilitarios.completarComZeros(indice + 1)]
              .concat(array)
            ;
          })
        ;

        Guia.definir(
            vm.carga
          , vm.destinatario
          , vm.lacre
          , vm.malote

          /**
           * array com processos
           * que acabou de ser analisada
           */
          , processos
        );

        $location.url("/imprimir");
      } else {
        alert("Preencha todo o formulário!");
      }
    }
  }
})();
