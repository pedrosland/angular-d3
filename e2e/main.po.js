'use strict';

function MainPage() {
  this.url = 'http://localhost:3000/';
  this.goTo = function goTo(){
    browser.get(this.url);
  };

  this.graphs = element.all(by.css('.d3a-line-graph'));
  this.linePaths = element.all(by.css('.d3a-line-graph .line'));

  this.addOneButton = element(by.css('.add-graph-1'));
  this.addTenButton = element(by.css('.add-graph-10'));

  this.addGraph = function addGraph(){
    this.addOneButton.click();
  };

  this.addTenGraphs = function addTenGraphs(){
    this.addTenButton.click();
  };

  this.getLinePath = function getLinePath(eq){
    return this.linePaths.get(eq);
  };
}

module.exports = new MainPage();
