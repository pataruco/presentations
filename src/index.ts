// Using export-loader to load remark downloaded from NPM
// @ts-ignore
import remark from 'exports-loader?remark!remark-slide/out/remark.js';
import 'normalize.css';
import slides from '../slides';
import getSlide from './lib/fetch-slides';
import './main.css';

interface SlideSettings {
  count: boolean;
  highlightSpans: boolean;
  highlightStyle: 'atom-one-dark' | string;
  navigation: {
    scroll: boolean;
    touch: boolean;
    click: boolean;
  };
  ratio: string;
  slideNumberFormat: string;
  source?: string | null;
  sourceUrl?: string;
}

const slideSettings: SlideSettings = {
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

const showSlides = async (lesson: string): Promise<void> => {
  const lessonSlides = await getSlide(lesson);
  slides
    ? (slideSettings.source = lessonSlides)
    : (slideSettings.sourceUrl = lesson);
  remark.create(slideSettings);
};

showSlides(slides.fewdLessons.svg);
