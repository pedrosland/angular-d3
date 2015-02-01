'use strict';

describe('The main page', function () {
  var page;

  beforeEach(function () {
    page = require('./main.po');
    page.goTo();
  });

  it('should display one graph to begin', function() {
    expect(page.graphs.count()).toBe(3);

    expect(page.getLinePath(0).getAttribute('d')).not.toEqual(null);
  });

  it('should add 1 new graph when the 1 button is clicked', function () {
    page.addGraph();

    expect(page.graphs.count()).toBe(4);

    // The graphs should not have the same data
    expect(page.getLinePath(0).getAttribute('d')).not.toBe(page.getLinePath(1).getAttribute('d'));
  });

  it('should add 10 new graphs when the 10 button is clicked', function () {
    page.addTenGraphs();

    expect(page.graphs.count()).toBe(13);
  });

});
