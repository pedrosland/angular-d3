'use strict';

/**
 * @ngdoc value
 * @name d3.d3
 * @module d3
 * @description
 *
 * Provides directive with d3.js library.
 */
angular.module('d3', [])
  .value('d3', window.d3);

/*
I prefer this way because I can manage my dependency with Bower without having to copy/paste the library inside a
module, when updating dependencies it can become forgotten and I don't want to include promises in all of my directives.
 */
