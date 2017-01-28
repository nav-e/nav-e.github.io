# Green Navigation Docs

## Installation Instructions

- Clone this repository or download it as a .zip file and unzip.
- Install gatsby ([Python v2](https://www.python.org/) is required!):

  ```shell
  npm install -g gatsby
  ```

- Go to repo directory and install dependencies.

  ```shell
  cd  greennav.github.io
  npm install
  ```

- Start gatsby server:

  ```shell
  gatsby develop
  ```

- Open site in browser at `localhost:8000` and make your changes.

## Edit Documentation

- Each page is in its own markdown file in the pages directory. If you want to make changes to a page, just edit the corresponding Markdown file.
- There are three main categories:

  - docs
  - development
  - news

- To add a new page, create a new markdown file in the corresponding pages directory.

- With gatsby it is also possible to write html, js or even json code to present content. For further information go to [GatsbyJS-Docs](https://github.com/gatsbyjs/gatsby)

- Note that the documentation repo is ready for [material-ui](http://www.material-ui.com/#/)! So if you want to use any component, do it!

- After editing any content make a pull-request. We are using [Netlify](https://www.netlify.com/) to automatically deploy our documentation, so if your PR is accepted you should see your changes briefly.
