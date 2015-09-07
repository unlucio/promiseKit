# promiseKit
A collection of small and useful enhancements to ES6 native promises without reinventing the wheel.

## So What?
In the last decade or so the javascript comunity came up with extensive `Promise` libraries and implementations way before they were
standardised and finally included in the interpretes.
[Bluebird](https://github.com/petkaantonov/bluebird), [When](https://github.com/cujojs/when), [Q](https://github.com/kriskowal/q) are some examples.
Native promises have finally landed in modern browesers and [node](https://github.com/joyent/node) but they're kind of quite _minimal_ (someone would even say "crippled").
ES6 promises are a good start: a weldefined base implementation and common ground.

### The target
I don't know you but since I can use the native Promises, and I'm usually not happy to add huge dependeices to my projects for just a little bit of sugar,
I'm moving away form those libs but they for sure carry some very useful bits.
This repos' aim is to group all those little useful icing-functions we're used to have and move them on ES6 promises in a light and independent way.
independent such as "free form dependencies": it would be nice to be able to include a conveniente 20-loc function in my project without needing 5MBs of dependencies ;)

### How to contribute:
- create a new directory with the name of the function
- put and `index.js` file with the function implementation
- add an `example.js` file to showcase how to use it/what it does
- add some tests
- Update the doc

## List:

- [Props](https://github.com/unlucio/promiseKit/blob/master/props): Kind of like `all()` but it receives and return an object (dictionatry) instead of an array.
- [Finally](https://github.com/unlucio/promiseKit/blob/master/finally): Just like in a try/catch clausule, functions registered as "finally" will be called at the end of a promise cicle.


## Future:
Yes at some point would be nice to brew a modular library out of this :)
