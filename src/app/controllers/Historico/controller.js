;(function (angular) {
  "use strict";

  angular
    .module("app")
    .controller("Historico", Historico);

  function Historico(
      $location
    , $window
    , Configuracoes
    , Historico
  ) {
    var hist = this;
    ////////////////

    hist._iniciar = function () {
      hist.atualizarDados();
    };

    hist.apagarTudo = function () {
      var temCerteza = $window.confirm("Você perderá tudo!\n\nCerteza?");

      if (temCerteza) {
        Configuracoes.adicionar("historico", {});
        hist.atualizarDados();
      }
    };

    hist.atualizarDados = function () {
      var dadosEmObj = Configuracoes.obter("historico");
      var dadosEmArray = Object.entries(dadosEmObj);

      hist.dados = dadosEmArray;
    };

    hist.editar = function (data) {
      $location.url("/editar/" + data);
    };

    hist.remover = function (data) {
      var temCerteza = $window.confirm("Certeza?");

      if (temCerteza) {
        Historico.remover(data);
        hist.atualizarDados();
      }
    };

    hist.tahVazio = function () {
      return angular.equals(hist.dados, []);
    };

    hist.ver = function (data) {
      $location.url("/impressao/" + data);
    };
  }
})(window.angular);
