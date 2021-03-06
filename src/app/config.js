;(function (angular) {
  "use strict";

  angular
    .module("app")
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when("/", usar("indice"))
      .when("/configuracoes", usar("configuracoes"))
      .when("/editar/:data", usar("indice"))
      .when("/historico", usar("historico"))
      .when("/impressao/:data", usar("impressao"))
      .otherwise({
        redirectTo: "/"
      });

    function usar(nome) {
      var prefixo = "gr-pag-";
      var formatado = prefixo + nome;
      var tagInicio = "<" + formatado + ">";
      var tagFim = "</" + formatado + ">";
      var tag = tagInicio + tagFim;

      return {
        template: tag
      };
    }
  }
})(window.angular);
