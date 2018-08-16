# Holocron

![](https://media.giphy.com/media/l2JJmXRcFoEJNXyEM/giphy.gif)

It's a Markdown presentation tool using the new [Webpack server](https://github.com/webpack-contrib/webpack-serve) and [remarkjs](https://github.com/gnab/remark)

## How to install?

- Clone this repo

  ```shell
  git clone git@github.com:pataruco/holocron.git
  ```

- Install dependencies
  ```shell
  yarn
  ```

## How to run it

- Create a new presentation usin markdown on [`./slides`](./slides) folder
- On [`./src/index.js`](./src/index.js) add the path of your new presentation to the lesson object
  ```js
  const lessons = {
    flexbox: '../slides/flexbox/flexbox.md',
    ...
  };
  ```
- Then on `remark` instantiation method, replace `sourceUrl` value to the new path
  ```js
  remark.create({
    sourceUrl: lessons.flexbox,
    ...
  };
  ```
- To start the server just run
  ```shell
    yarn start
  ```

## How to print

Just save as PDF from the browser
