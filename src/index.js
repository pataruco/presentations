import 'normalize.css';
import './main.css';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';

const lessons = {
  accesability: '../slides/accesability/accesability.md',
  flexbox: '../slides/flexbox/flexbox.md',
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
  sourceUrl: lessons.accesability,
  slideNumberFormat: '',
});
