(function (namespace) {
  'use strict';

  var AppComponent = function () {
    var o = this;
    fe.App.ready(function () {
      o.initialize();
    });
  };

  var p = AppComponent.prototype;

  p.initialize = function () {
    this.clickEvents();
  };

  p.clickEvents = function () {
    var logo = document.querySelector('.logo');
    logo.addEventListener('click', function (e) {
      var section3 = document.querySelector("[data-section='3']");
      fe.AppNavigation.scrollTo(section3);
    });
  };

  window.fe.AppComponent = new AppComponent();
})(this.fe);
