// Using export-loader to load remark downloaded from NPM
// @ts-ignore
import remark from 'exports-loader?remark!remark/src/remark.js';
import 'normalize.css';
import slides from '../slides';
import getSlide from './lib/fetch-slides';
import './main.css';

interface SlideSettings {
  count: boolean;
  highlightLines?: boolean;
  highlightSpans: boolean;
  highlightStyle: 'atom-one-dark' | string;
  navigation: {
    click: boolean;
    scroll: boolean;
    touch: boolean;
  };
  ratio: string;
  slideNumberFormat: string;
  source?: string | null;
  sourceUrl?: string;
}

const slideSettings: SlideSettings = {
  count: false,
  highlightLines: true,
  highlightSpans: true,
  highlightStyle: 'atom-one-dark',
  navigation: {
    click: false,
    scroll: false,
    touch: true,
  },
  ratio: '16:9',
  // ratio: '64:35', // browser aspect ratio
  slideNumberFormat: '',
};

const showSlidesLocally = async (
  lesson: string,
  local: boolean = false,
): Promise<void> => {
  local
    ? (slideSettings.sourceUrl = `./slides/${lesson}`)
    : (slideSettings.source = await getSlide(lesson));
  remark.create(slideSettings);
};

showSlidesLocally(slides.uxdi.oneDayWorlshopAfternoon, true);
