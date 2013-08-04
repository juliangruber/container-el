var ready = require('domready');

var container = document.createElement('div');
container.id = 'container';

ready(function () {
  document.body.appendChild(container);
});

module.exports = container;
