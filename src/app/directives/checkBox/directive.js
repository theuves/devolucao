;(function (angular) {
  "use strict";

  angular
    .module("app")
    .directive("checkBox", checkBox);

  function checkBox() {
    return {
      link: link,
      scope: {
        cbCorDaBorda: "@",
        cbCorDoFundo: "@",
        cbLigado: "=",
        cbMensagem: "@"
      },
      templateUrl: "app/directives/checkBox/template.html"
    };

    function link(scope, element) {
      element.css({
        display: "block"
      });
    }
  }
})(this.angular);
