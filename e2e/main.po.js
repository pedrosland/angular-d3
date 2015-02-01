'use strict';

function MainPage() {
  this.url = 'http://localhost:3000/';
  this.goTo = function goTo(){
    browser.get(this.url);
  };

  this.graphs = element.all(by.css('.d3a-line-graph'));
  this.linePaths = element.all(by.css('.d3a-line-graph .line'));

  this.addButton = element(by.css('.add-graph'));

  this.addGraph = function addGraph(){
    this.addButton.click();
  };

  this.getLinePath = function getLinePath(eq){
    return this.linePaths.get(eq);
  };
}

module.exports = new MainPage();
