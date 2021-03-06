# lego.js

by [Tyler Benziger](http://twitter.com/tybenz)


This git repo is just a basic sketch of concepts conveyed in my
[JS Legos](http://tybenz.com/presentation-js-legos) talk.
This is not a production-ready library.

Maybe, if we get enough people contributing, we could do more to
implement and test new features. See [contributing](#contributing)

# Building from source

If you'd like to compile your own version of lego.js with specific
widgets included/excluded, follow these steps:

- Clone this repo
- run `npm install` and `bower install`
- Edit `src/namespace.js` to return only the components you need
- Recompile source by running `npm run-script build`
- Copy/paste `lego.min.js` where you need it

# Contributing

1. Fork this repo
- Clone your forked repo
- run `npm install` and `bower install`
- Make changes
- Recompile source by running `npm run-script build`
- Submit a pull request
