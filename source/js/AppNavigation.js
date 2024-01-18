(function (namespace) {
  'use strict';

  let AppNavigation = function () {
    let o = this;
    fe.App.ready(function () {
      o.initialize();
    });
  };

  let p = AppNavigation.prototype;

  p.initialize = function () {
    // Init

    this._locationReady();
  };

  p.scrollTo = function (elem) {
    elem.scrollIntoView(true, {
      behavior: 'smooth',
    });
  };

  p._locationReady = function () {
    let currentUrl = window.location.pathname;
    if (currentUrl.endsWith('/')) currentUrl = currentUrl.slice(0, -1);

    let url = document.querySelector(`a[href='${currentUrl}']`);
    if (!url) return;

    url.classList.add('active');

    const parentUpdate = (parent) => {
      parent.classList.add('active');

      let parentUrl = Array.from(parent.parentNode.childNodes).find((x) => x.nodeName === 'A');
      if (parentUrl) parentUrl.classList.add('active');

      let topParent = parent.closest('div:not(.active)');
      if (topParent) parentUpdate(topParent);
    };

    if (url.nextElementSibling) {
      let nextSibling = Array.from(url.nextElementSibling?.childNodes).find((x) => x.nodeName === 'UL');
      if (nextSibling) {
        parentUpdate(url.nextElementSibling);
      }
    } else {
      let urlParent = url.closest('div');

      parentUpdate(urlParent);
    }
  };

  window.fe.AppNavigation = new AppNavigation();
})(this.fe);
