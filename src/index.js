import 'normalize.css';
import './main.css';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';

const lessons = {
  accesability: '../slides/accesability/accesability.md',
  boxModel: '../slides/box-model/box-model.md',
  cssSelectors: '../slides/css-selectors/css-selectors.md',
  finalPresentations: '../slides/final-presentations/slides.md',
  flexbox: '../slides/flexbox/flexbox.md',
  html: '../slides/intro-html/html.md',
  htmlCss: '../slides/html-css/html-css.md',
  svg: '../slides/svg/svg.md',
};

remark.create({
  count: false,
  highlightSpans: true,
  highlightStyle: 'atom-one-dark',
  navigation: {
    scroll: false,
    touch: true,
    click: false,
  },
  ratio: '16:9',
  sourceUrl: lessons.cssSelectors,
  slideNumberFormat: '',
});

/* 
FEWD lessons

1 html
2 htmlCss
3 boxModel
4 cssSelectors

*/
