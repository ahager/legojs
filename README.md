# lego.js

by [Tyler Benziger](http://twitter.com/tybenz)


This git repo is just a basic sketch of concepts conveyed in my
[JS Legos](http://tybenz.com/presentation-legos) talk.

# Building form source

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
