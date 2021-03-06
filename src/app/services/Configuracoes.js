;(function (angular) {
  "use strict";

  angular
    .module("app")
    .service("Configuracoes", Configuracoes);

  function Configuracoes($window) {
    var conf = this;
    ////////////////

    conf.PREFIXO = "g-";

    conf.prefixar = function (item) {
      var prefixado = conf.PREFIXO + item;

      return prefixado;
    };

    conf.adicionar = function (item, valor) {
      var itemComPrefixo = conf.prefixar(item);
      var valorEmJson = angular.toJson(valor);

      $window.localStorage.setItem(itemComPrefixo, valorEmJson);
    };

    conf.obter = function (item) {
      var itemComPrefixo = conf.prefixar(item);
      var valorEmJson = $window.localStorage.getItem(itemComPrefixo);
      var valorCru = angular.fromJson(valorEmJson);

      return valorCru;
    };

    conf.remover = function (item) {
      var itemComPrefixo = conf.prefixar(item);

      $window.localStorage.removeItem(itemComPrefixo);
    };

    conf.tem = function (item) {
      var itemComPrefixo = conf.prefixar(item);
      var temItem = $window.localStorage.hasOwnProperty(itemComPrefixo);

      return temItem;
    };
  }
})(window.angular);
