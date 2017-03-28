# Overview

This repo is just as its name suggests - a sandbox for react.js components.

It's also an opportunity to practice our github workflow.

As an initial overview, I suggest contributors do the following:

0) clone the repo and run it on your local machine (see #setup below for details)
1) decide on an improvement to make, feature or component to add
2) make a new branch exclusively aimed at your change 
3) get the feature working and submit a pull request

# Content

There are literally *no prescribed functions* for this "project".

It exists purely as a structural exercise.

My initial components take typed user input and display inconsequential data analyses. Feel free to build on that, or add whatever else you see fit - pictures of cats, embedded widgets, random data from APIs - **I dont care!**

# Form

This is what it's all about. We should discuss all issues and PRs in terms of their formal correctness. Does it fit the react modular paradigm? Does it respect the (as yet unformulated) group style criteria and best practice?

The point is that this gives us an an opportunity to discuss such issues in the abstract and converge around a consistent approach.

The point is not that the product is good, but that it's method of production is.

I won't waffle on more, you get the idea.

# setup

After cloning the repo, you'll probably have to install some npm modules to get the project to compile.

    $ sudo npm i -S react
	$ sudo npm i -S react-dom
	$ sudo npm i -D babel-core babel-loader babel-preset-react
	$ sudo npm i -D webpack webpack-dev-server html-webpack-plugin

If you've set up your npm permissions correctly you won't have to sudo, but I'm pretty sloppy so that's on my to-do list. 
