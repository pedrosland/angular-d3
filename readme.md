# D3 Angular (Line Graph)

This is a test project where I reminded myself how to use D3 - and how much I've forgotten since I last used it. :)

## Installing

To install the app and dependencies:

    npm install && bower install

If you don't have gulp then you'll need to run (with `sudo` depending on your platform's preferences):

    npm install -g gulp

You'll also need java to run e2e tests with selenium.

## Running

To run the application in development mode:

    gulp serve

## Testing

To run Karma unit tests:

    gulp test

To run Protractor e2e tests:

    gulp protractor

## Comments

* Although I didn't write the gulp files myself, I'd have used something similar but this just saved a lot of time. If you feel that I cheated then you can note that I modified karma and gulp files so that unit tests can run directly from karma. I've used many of the parts of this gulp build in other projects.
* If I wanted to improve the experiment, I could:
  * Make the width of the graphs adapt to suit the width of the container when resized. Right now, it probably doesn't look pretty when viewed landscape on a mobile and rotated to portrait.
  * There may be some more efficient mechanism for updating the graphs that would be more suited to data that updates every second although on my computer performance quite good.
* I quite enjoyed this project.
