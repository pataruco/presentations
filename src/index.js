import './main.css';
import 'normalize.css';
import getSlide from './lib/fetch-slides';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';

const fewdLessons = {
  accesability: 'slides/accesability/accesability.md',
  animations: './slides/animations/animations.md',
  boxModel: 'slides/box-model/box-model.md',
  cssSelectors: 'slides/css-selectors/css-selectors.md',
  finalPresentations: 'slides/final-presentations/slides.md',
  flexbox: 'slides/flexbox/flexbox.md',
  forms: 'slides/forms/forms.md',
  html: 'slides/intro-html/html.md',
  htmlCss: 'slides/html-css/html-css.md',
  jquery: 'slides/intro-jquery/slides.md',
  jqueryPlugins: 'slides/intro-jquery-plugins/slides.md',
  js: 'slides/intro-js/slides.md',
  positioning: 'slides/positioning/positioning.md',
  responsive: 'slides/responsive/responsive.md',
  svg: 'slides/svg/svg.md',
};

const introToCode = {
  introToCode: './slides/intro-to-code/intro-to-code.md',
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

showSlides(introToCode.introToCode);

/* 
fewdLessons

1 html
2 htmlCss
3 boxModel
4 cssSelectors
5 flexbox
6 positioning
7 responsive
8
9 js
10 jquery
11 jquery-plugins
12 forms
13 animations
14 svg 
15 accesability
16 git / sass 
*/

/* 
introToCode

1 introToCode

*/
