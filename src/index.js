import 'normalize.css';
import './main.css';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';

const lessons = {
  flexbox: '../slides/flexbox/flexbox.md',
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
  sourceUrl: lessons.flexbox,
  slideNumberFormat: '',
});
