;(function (angular) {
  "use strict";

  angular
    .module("app")
    .component("grPagImpressao", config());

  function config() {
    return {
      controller: Impressao,
      templateUrl: "app/components/grPagImpressao/template.html"
    };
  }

  /* @ngInject */
  function Impressao(
    $location,
    $routeParams,
    $window,
    Configuracoes,
    Historico
  ) {
    var impr = this;
    ////////////////

    impr._iniciar = function () {
      var data = impr.data;
      var dados = Historico.obter(data);
      var temDados = !!dados;

      if (!temDados) {
        $window.alert("Guia inexistente!");
        $location.url("/");

        return;
      }

      angular.extend(impr, dados);
    };

    impr.data = $routeParams.data;

    impr.usuario = Configuracoes.obter("usuario");

    impr.imprimir = function () {
      $window.print();
    };
  }
})(window.angular);
