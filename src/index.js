import './main.css';
import 'normalize.css';
import getSlide from './lib/fetch-slides';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';

const lessons = {
  accesability: 'slides/accesability/accesability.md',
  boxModel: 'slides/box-model/box-model.md',
  cssSelectors: 'slides/css-selectors/css-selectors.md',
  finalPresentations: 'slides/final-presentations/slides.md',
  flexbox: 'slides/flexbox/flexbox.md',
  html: 'slides/intro-html/html.md',
  htmlCss: 'slides/html-css/html-css.md',
  positioning: 'slides/positioning/positioning.md',
  responsive: './slides/responsive/responsive.md',
  svg: 'slides/svg/svg.md',
};

const slideSettings = {
  count: false,
  highlightSpans: true,
  highlightStyle: 'atom-one-dark',
  navigation: {
    scroll: false,
    touch: true,
    click: false,
  },
  ratio: '16:9',
  slideNumberFormat: '',
};

const showSlides = async lesson => {
  const slides = await getSlide(lesson);
  slides ? (slideSettings.source = slides) : (slideSettings.sourceUrl = lesson);
  remark.create(slideSettings);
};

showSlides(lessons.responsive);

/* 
FEWD lessons

1 html
2 htmlCss
3 boxModel
4 cssSelectors
5 flexbox
6 
8 positioning
9 responsive

*/
