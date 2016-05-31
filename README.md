# Green Navigation Wiki

## Installation instructions

- Clone this repository or download it as a .zip file and unzip.
- Install jekyll (and any other Ruby gems) with `bundle install`. (Prerequisite: must have Ruby installed. You may also have to install bundler with `gem install bundler`.)
- If you don't have Bower, run `npm install -g bower`.
- To install all other dependencies, run `bower install`.
- Run `jekyll serve` to build the site, which should be accessible at `http://localhost:4000/`.


## Wiki editing instructions

- Each page is in its own *.md file in the root directory. If you want to make changes to a page, just edit the corresponding Markdown file.
- To add a new page, create a new *.md file in the root directory. Make sure that the first 3 lines are the following [YAML Front Matter](https://jekyllrb.com/docs/frontmatter/).   

```
---
layout: page
title: New Wiki Page Title
---
```