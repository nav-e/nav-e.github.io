# Green Navigation Docs

## Installation Instructions

- Clone this repository or download it as a .zip file and unzip.
- Install gatsby ([Python v2](https://www.python.org/) is needed!):

  ```
  npm install -g gatsby
  ```

- Install all dependencies from the repo directory:

  ```
  cd  greennav.github.io
  npm install
  ```

- Start gatsby server:

  ```
  gatsby develop
  ```

- Open site in browser at `localhost:8000`.

## Edit Documentation

- Each page is in its own *.md file in the pages directory. If you want to make changes to a page, just edit the corresponding Markdown file.
- There are three main categories:

  - docs
  - development
  - news

- To add a new page, create a new *.md file in the corresponding pages directory.

- With gatsby it is also possible to write html, js or even json code to present content. For further information go to [GatsbyJS-Docs](https://github.com/gatsbyjs/gatsby)

- After editing any content make a pull-request.
