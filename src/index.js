import 'normalize.css';
import './main.css';
import getSlide from './lib/fetch-slides';
// Using export-loader to load remark downloaded from NPM
import remark from 'exports-loader?remark!remark-slide/out/remark.js';
import slides from '../slides';

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

showSlides(slides.fewdLessons.accesability);
