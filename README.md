# Green Navigation Docs

## Installation Instructions

- Clone this repository or download it as a .zip file and unzip.
- Install gatsby ([Python v2](https://www.python.org/) is required!):

  ```shell
  npm install -g gatsby
  ```

- Go to repo directory. Checkout _source_ branch first to make changes! Then install dependencies.

  ```shell
  cd  greennav.github.io
  git checkout source  # Important !!!
  npm install
  ```

- Start gatsby server:

  ```shell
  gatsby develop
  ```

- Open site in browser at `localhost:8000` and make your changes.

## Installation with docker

Run development environment

```zsh
docker run -it --rm \
  -v $(pwd):/srv -w /srv -p 8000:8000 \
  6e6a/docker-gatsbyjs /bin/sh -c \
  'npm update && gatsby develop'
```

Build for deployment

```zsh
docker run -it --rm \
  -v $(pwd):/srv -w /srv \
  6e6a/docker-gatsbyjs /bin/sh -c \
  'npm update && gatsby build --prefix-links'
```

## Edit Documentation

- Each page is in its own markdown file in the pages directory. If you want to make changes to a page, just edit the corresponding Markdown file.
- There are three main categories:

  - docs
  - development
  - news

- To add a new page, create a new markdown file in the corresponding pages directory.

- With gatsby it is also possible to write html, js or even json code to present content. For further information go to [GatsbyJS-Docs](https://github.com/gatsbyjs/gatsby)

- Note that the documentation repo is ready for [material-ui](http://www.material-ui.com/#/)! So if you want to use any component, do it!

- After editing any content make a pull-request. Remember that you are still on _source_ branch. That's fine! If we will accept your PR, we will publish your changes to master branch.

--------------------------------------------------------------------------------

_Note:_ The following instructions are **only** relevant for members with write access to the repository!

## Build and Deploy

- If you are done and satisfied with your work commit and push your changes.
- Build the documentation with:

  ```shell
  gatsby build --prefix-links
  ```

- The project will now build to _public_ directory. Remember that you are still on _source_ branch. That's fine! All you have to do now is to move the content of _public_ to the root of the _master_ branch and commit and push again (now from master branch). That's it.
