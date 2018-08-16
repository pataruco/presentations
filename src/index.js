import 'normalize.css';
import remark from 'exports-loader?remark!remark-slide/out/remark.js';
import './main.css';

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
