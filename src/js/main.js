import rangeSliderArticle from './modules/range-slider';
import quiz from './modules/quez';
import faqAccordion from './modules/faq';
import instaLoader from './modules/insta';
import map from './modules/map';
import products from './modules/products';
import miniCart from './modules/cart';
import burger from './modules/burger';
import validate from './modules/validate';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  rangeSliderArticle();
  quiz();
  burger();
  faqAccordion();
  instaLoader();
  map();
  products();
  miniCart();
  validate();
});
