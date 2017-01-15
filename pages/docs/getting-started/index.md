---
layout: page
title: Getting Started
---

## Install the latest version of Node.js and npm

```zsh
sudo apt install nodejs npm

# optional:
# we recommend to set a symlink from nodejs to node
# if you get a command not found error
#
# sudo ln -s /usr/bin/nodejs /usr/bin/node

npm --version
3.10.8
node --version
v7.0.0
```

In some distributions Node.js and npm are a little bit outdated, but _don't panik_ :wink:<br>
you can use npm itself to update Node.js and npm to the latest versions.

```zsh
sudo npm install -g npm
sudo npm install -g n

sudo n stable
# or
# sudo n latest
```

## Setup

```zsh
git clone https://github.com/Greennav/GreenNav.git
cd GreenNav
npm install
```

## Don't forget the back-end !

You also need to clone [our routing library](https://github.com/Greennav/rt-library) and run the node server locally

```zsh
git clone https://github.com/Greennav/rt-library.git
npm install
node demo-ucs.js
```

P.S.: Currently we only support the routing in Monaco

## Run

```zsh
npm start
```

The web interface is now accessible at <http://localhost:3000/> by default, see your terminal for details.
