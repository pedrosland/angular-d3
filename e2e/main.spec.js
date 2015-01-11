'use strict';

describe('The main page', function () {
  var page;

  beforeEach(function () {
    page = require('./main.po');
    page.goTo();
  });

  it('should display one graph to begin', function() {
    expect(page.graphs.count()).toBe(1);

    expect(page.getLinePath(0).getAttribute('d')).not.toEqual(null);
  });

  it('should add another graph when clicked', function () {
    page.addGraph();

    expect(page.graphs.count()).toBe(2);

    // The graphs should not have the same data
    expect(page.getLinePath(0).getAttribute('d')).not.toBe(page.getLinePath(1).getAttribute('d'));
  });

});
