import rangeSliderArticle from './modules/range-slider';
import Quiz from './modules/quez';
import { quizData } from './modules/quez';
import faqAccordion from './modules/faq';
import instaLoader from './modules/insta';
import map from './modules/map';
import products from './modules/products';
import miniCart from './modules/cart';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  rangeSliderArticle();
  window.quiz = new Quiz('.quiz-form .quiz-questions', quizData, {
    nextBtnText: 'Следующий шаг',
    sendBtnText: 'Отправить',
  });

  faqAccordion();
  instaLoader();
  map();
  products();
  miniCart();
});
