/* Small progressive enhancement shared by every page. */
(function () {
  'use strict';

  // Mark the nav link for the current page.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.rail-links a');
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute('href') || '').split('#')[0];
      if (href && href === here) links[i].setAttribute('aria-current', 'page');
    }
  });

  // Close the mobile menu when a link inside it is tapped.
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('.rail-links a') : null;
    if (!link) return;
    var rail = document.querySelector('.site-rail[data-open]');
    if (rail) rail.removeAttribute('data-open');
  });
})();
