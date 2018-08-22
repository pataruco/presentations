import 'normalize.css';
import './main.css';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';

const lessons = {
  accesability: '../slides/accesability/accesability.md',
  finalPresentations: '../slides/final-presentations/slides.md',
  flexbox: '../slides/flexbox/flexbox.md',
  html: '../slides/intro-html/html.md',
  htmlCss: '../slides/html-css/html-css.md',
  svg: '../slides/svg/svg.md',
};

remark.create({
  count: false,
  highlightLines: true,
  highlightSpans: true,
  highlightStyle: 'atom-one-dark',
  navigation: {
    scroll: false,
    touch: true,
    click: false,
  },
  ratio: '16:9',
  sourceUrl: lessons.htmlCss,
  slideNumberFormat: '',
});

/* 
FEWD lessons

1 html
2 htmlCss

*/
