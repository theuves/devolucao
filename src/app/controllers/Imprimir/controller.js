;(function () {
  "use strict";

  angular
    .module("app")
    .controller("Imprimir", Imprimir);

  function Imprimir(
      $location
    , $window
    , Configuracoes
    , Guia
  ) {
    var impr = this;
    ////////////////

    impr.data = Date.now();

    impr.guia = Guia;

    impr.usuario = Configuracoes.obter("usuario");

    impr.iniciar = function () {
      if (impr.guia.tahVazia()) {
        $window.alert("Nenhum dado!");
        $location.url("/");
      }
    };

    impr.imprimir = function () {
      $window.print();
    };

    impr.voltar = function () {
      $location.url("/");
    };
  }
})();
