(function (namespace) {
  'use strict';

  var AppValidate = function () {
    var o = this;
    fe.App.ready(function () {
      o.initialize();
    });
  };

  var p = AppValidate.prototype;

  p.initialize = function () {
    // Init
  };

  p.checkMail = function (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  window.fe.AppValidate = new AppValidate();
})(this.fe);
