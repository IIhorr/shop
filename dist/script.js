/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_range_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/range-slider */ "./src/js/modules/range-slider.js");
/* harmony import */ var _modules_quez__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/quez */ "./src/js/modules/quez.js");
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/faq */ "./src/js/modules/faq.js");
/* harmony import */ var _modules_insta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/insta */ "./src/js/modules/insta.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/map */ "./src/js/modules/map.js");
/* harmony import */ var _modules_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/products */ "./src/js/modules/products.js");
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/cart */ "./src/js/modules/cart.js");








window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_range_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  window.quiz = new _modules_quez__WEBPACK_IMPORTED_MODULE_1__["default"]('.quiz-form .quiz-questions', _modules_quez__WEBPACK_IMPORTED_MODULE_1__["quizData"], {
    nextBtnText: 'Следующий шаг',
    sendBtnText: 'Отправить'
  });
  Object(_modules_faq__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_insta__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_map__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_products__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const miniCart = () => {
  const cartBtn = document.querySelector('.cart__btn');
  const miniCart = document.querySelector('.mini-cart');
  cartBtn.addEventListener('click', () => {
    miniCart.classList.toggle('mini-cart--visible');
    document.addEventListener('click', e => {
      if (!e.target.classList.contains('mini-cart') && !e.target.classList.contains('cart__btn')) {
        miniCart.classList.remove('mini-cart--visible');
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (miniCart);

/***/ }),

/***/ "./src/js/modules/faq.js":
/*!*******************************!*\
  !*** ./src/js/modules/faq.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const faqAccordion = function () {
  const faq = document.querySelectorAll('.faq-accordion');
  faq.forEach(el => {
    el.addEventListener('click', e => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq-accordion__control');
      const content = self.querySelector('.faq-accordion__content');
      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aira-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (faqAccordion);

/***/ }),

/***/ "./src/js/modules/insta.js":
/*!*********************************!*\
  !*** ./src/js/modules/insta.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const instaLoader = () => {
  const insta = document.querySelector('.instagram__content');

  (function () {
    new InstagramFeed({
      username: 'max.denaro',
      display_profile: false,
      display_biography: false,
      display_gallery: true,
      display_captions: true,
      callback: function (data) {
        console.log('done');
        let instaArray = data.edge_owner_to_timeline_media.edges;
        const newArray = instaArray.slice(0, 5);

        for (let item of newArray) {
          let element = item.node;
          insta.insertAdjacentHTML('afterbegin', `
            <article class="instagram__item">
              <a href="https://www.instagram.com/p/${element.shortcode}/" target="_blank">
                <img src="${element.thumbnail_src}"
                  alt="${element.accessibility_caption}">
              </a>
            </article>
          `);
        }
      },
      styling: false
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (instaLoader);

/***/ }),

/***/ "./src/js/modules/map.js":
/*!*******************************!*\
  !*** ./src/js/modules/map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const map = () => {
  ymaps.ready(init);

  function init() {
    // Creating the map.
    const myMap = new ymaps.Map('map', {
      // The map center coordinates.
      // Default order: “latitude, longitude”.
      // To not manually determine the map center coordinates,
      // use the Coordinate detection tool.
      center: [55.76, 37.64],
      // Zoom level. Acceptable values:
      // from 0 (the entire world) to 19.
      zoom: 7
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "./src/js/modules/products.js":
/*!************************************!*\
  !*** ./src/js/modules/products.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const products = () => {
  const catalogList = document.querySelector('.catalog-list');
  const catalogMore = document.querySelector('.catalog__more');
  const prodModal = document.querySelector('[data-graph-target="prod-modal"] .modal-content');
  const prodModalSlider = prodModal.querySelector('.modal-slider .swiper-wrapper');
  const prodModalPreview = prodModal.querySelector('.modal-slider .modal-preview');
  const prodModalInfo = prodModal.querySelector('.modal-info__wrapper');
  const prodModalDescr = prodModal.querySelector('.modal-prod-descr');
  const prodModalChars = prodModal.querySelector('.prod-chars');
  const prodModalVideo = prodModal.querySelector('.prod-modal__video');
  let prodQuantity = 5;
  let dataLength = null;

  const normalPrice = str => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const productSlider = new Swiper('.modal-slider__container', {
    slidesPerView: 1,
    spaceBetween: 20
  });

  if (catalogList) {
    const loadProducts = (quantity = 5) => {
      fetch('../src/resources/data/data.json').then(response => {
        return response.json();
      }).then(data => {
        dataLength = data.length;
        catalogList.innerHTML = '';

        for (let i = 0; i < dataLength; i++) {
          if (i < quantity) {
            let item = data[i];
            catalogList.innerHTML += `
                  <li class="catalog-list__item">
                  <article class="product">
                    <div class="product__image">
                      <img src="${item.mainImage}" alt="${item.title}" />
                    </div>
                    <div class="product__btns">
                      <button
                        class="btn-reset product__btn"
                        data-graph-path="prod-modal"
                        aria-label="Показать информацию о товаре"
                        data-id="${item.id}"
                      >
                        <svg class="">
                          <use xlink:href="assets/img/icons/sprite.svg#show"></use>
                        </svg>
                      </button>
                      <button class="btn-reset product__btn" aria-label="Добавить товар в корзину" data-id="${item.id}">
                        <svg class="icon">
                          <use xlink:href="assets/img/icons/sprite.svg#shop"></use>
                        </svg>
                      </button>
                    </div>
                    <h3 class="product__title">${item.title}</h3>
                    <span class="product__price">${normalPrice(item.price)}</span>
                  </article>
                </li>

                  `;
          }
        }
      }).then(() => {
        const product__title = document.querySelectorAll('.product__title');
        product__title.forEach(el => {
          $clamp(el, {
            clamp: '22px'
          });
        });
        cartLogic();
        const modal = new GraphModal({
          isOpen: modal => {
            if (modal.modalContainer.classList.contains('prod-modal')) {
              const openBtnId = modal.previousActiveElement.dataset.id;
              loadModalData(openBtnId);
              productSlider.update();
            }
          }
        });
      });
    };

    loadProducts(prodQuantity);

    const loadModalData = (id = 1) => {
      fetch('../src/resources/data/data.json').then(response => {
        return response.json();
      }).then(data => {
        prodModalSlider.innerHTML = '';
        prodModalPreview.innerHTML = '';
        prodModalInfo.innerHTML = '';
        prodModalDescr.textContent = '';
        prodModalChars.innerHTML = '';
        prodModalVideo.innerHTML = '';

        for (let dataItem of data) {
          if (dataItem.id == id) {
            const slides = dataItem.gallery.map((image, idx) => {
              return `
                <div class="swiper-slide" data-index="${idx}">
                  <img src="${image}" alt="${idx}" >
                </div>
                `;
            });
            const preview = dataItem.gallery.map((image, idx) => {
              return `
                <div class="modal-preview__item ${idx === 0 ? 'modal-preview__item--active' : ''}" tabindex="0" data-index="${idx}">
                  <img src="${image}" alt="${idx}" />
                </div>
                `;
            });
            const sizes = dataItem.sizes.map(size => {
              return `
                <li class="modal-sizes__item">
                  <button class="btn-reset modal-sizes__btn">${size}</button>
                </li>
                `;
            });
            prodModalSlider.innerHTML = slides.join('');
            prodModalPreview.innerHTML = preview.join('');
            prodModalInfo.innerHTML = `
              <h3 class="modal-info__title">${dataItem.title}</h3>
              <div class="modal-info__rate">
                <img src="assets/img/modal/star.svg" alt="Рейтинг 5 из 5" />
                <img src="assets/img/modal/star.svg" alt="" />
                <img src="assets/img/modal/star.svg" alt="" />
                <img src="assets/img/modal/star.svg" alt="" />
                <img src="assets/img/modal/star.svg" alt="" />
              </div>
              <div class="modal-info__sizes">
                <span class="modal-info__subtitle">Выберите размер</span>
                <ul class="list-reset modal-info__sizes-list modal-sizes">
                  ${sizes.join('')}
                </ul>
              </div>
              <div class="modal-info__prices">
                <span class="modal-info__current-price">${dataItem.price + 'р'}</span>
                <span class="modal-info__old-price">${dataItem.oldPrice ? dataItem.oldPrice + 'р' : ''}</span>
              </div>
              `;
            prodModalDescr.textContent = dataItem.description;
            let charsItem = '';
            Object.keys(dataItem.chars).forEach(function eachKey(key) {
              charsItem += `<p class="prod-bottom__descr prod-chars__item">${key}: ${dataItem.chars[key]}</p>`;
            });
            prodModalChars.innerHTML = charsItem;

            if (dataItem.video) {
              prodModalVideo.style.display = 'block';
              prodModalVideo.innerHTML = `
                <iframe
              src="${dataItem.video}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
                `;
            } else {
              prodModalVideo.style.display = 'none';
            }
          }
        }
      }).then(() => {
        productSlider.update();
        productSlider.on('slideChangeTransitionEnd', function () {
          let idx = document.querySelector('.swiper-slide-active').dataset.index;
          document.querySelectorAll('.modal-preview__item').forEach(el => {
            el.classList.remove('.modal-preview__item--acitve');
          });
          document.querySelector(`.modal-preview__item[data-index="${idx}"]`).classList.add('.modal-preview__item--acitve');
        });
        document.querySelectorAll('.modal-preview__item').forEach(el => {
          el.addEventListener('click', e => {
            const idx = parseInt(e.currentTarget.dataset.index);
            productSlider.slideTo(idx);
            document.querySelectorAll('.modal-preview__item').forEach(el => {
              el.classList.remove('.modal-preview__item--acitve');
            });
            e.currentTarget.classList.add('.modal-preview__item--acitve');
          });
        });
      });
    };

    catalogMore.addEventListener('click', e => {
      prodQuantity = prodQuantity + 3;
      loadProducts(prodQuantity);

      if (prodQuantity >= dataLength) {
        catalogMore.style.display = 'none';
      } else {
        catalogMore.style.display = 'block';
      }
    });
  }

  let price = 0;
  const miniCartList = document.querySelector('.mini-cart__list');
  const fullPrice = document.querySelector('.mini-cart__summ');
  const cartCount = document.querySelector('.cart__count');

  const cartLogic = () => {
    const productBtn = document.querySelectorAll('.product__btn');
    productBtn.forEach(el => {
      el.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        loadCartData(id);
        e.currentTarget.classList.add('product__btn--disabled');
      });
    });
    miniCartList.addEventListener('click', e => {
      if (e.target.classList.contains('mini-product__delete')) {
        const self = e.target;
        const parent = self.closest('.mini-cart__item');
        let price = parseInt(priceWithoutSpaces(parent.querySelector('.mini-product__price').textContent));
        parent.remove();
        console.log(price); // !! передаю в minusFullPrice сторку, а нужно чилсо

        minusFullPrice(price);
        printFullPrice();
        let num = document.querySelectorAll('.mini-cart__item').length;

        if (num == 0) {
          cartCount.classList.remove('cart__count--visible');
        }

        printQuantity(num);
      }
    });
  };

  const priceWithoutSpaces = str => {
    return str.replace(/\s/g, '');
  };

  const plusFullPrice = currentPrice => {
    return price += currentPrice;
  };

  const minusFullPrice = currentPrice => {
    return price -= currentPrice;
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} р`;
  };

  const printQuantity = num => {
    cartCount.textContent = num;
  };

  const loadCartData = id => {
    fetch('../src/resources/data/data.json').then(response => {
      return response.json();
    }).then(data => {
      for (let dataItem of data) {
        if (dataItem.id == id) {
          miniCartList.insertAdjacentHTML('afterbegin', `
            <li class="mini-cart__item" data-id="${dataItem.id}">
            <article class="mini-cart__product mini-product">
              <div class="mini-product__image">
                <img src="${dataItem.mainImage}" alt=""${dataItem.title}"" />
              </div>
              <div class="mini-product__content">
                <div class="mini-product__text">
                  <h3 class="mini-product__title">"${dataItem.title}"</h3>
                  <span class="mini-product__price">"${normalPrice(dataItem.price)}"</span>
                </div>
                <button class="btn-reset mini-product__delete" aria-label="удалить товар">
                  <svg class="icon">
                    <use xlink:href="assets/img/icons/sprite.svg#trash"></use>
                  </svg>
                </button>
              </div>
            </article>
          </li>
            `);
          return dataItem;
        }
      }
    }).then(item => {
      plusFullPrice(item.price);
      printFullPrice();
      let num = document.querySelectorAll('.mini-cart__item').length;

      if (num > 0) {
        cartCount.classList.add('cart__count--visible');
      }

      printQuantity(num);
    }).then(() => {});
  };
};

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./src/js/modules/quez.js":
/*!********************************!*\
  !*** ./src/js/modules/quez.js ***!
  \********************************/
/*! exports provided: quizData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quizData", function() { return quizData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quiz; });
const quizData = [{
  number: 1,
  title: 'Какой тип кроссовок рассматриваете?',
  answer_alias: 'type',
  answers: [{
    answer_title: 'кеды',
    type: 'checkbox'
  }, {
    answer_title: 'кеды',
    type: 'checkbox'
  }, {
    answer_title: 'кеды',
    type: 'checkbox'
  }, {
    answer_title: 'кеды',
    type: 'checkbox'
  }, {
    answer_title: 'кеды',
    type: 'checkbox'
  }, {
    answer_title: 'кеды',
    type: 'checkbox'
  }]
}, {
  number: 2,
  title: 'Какой тип кроссовок рассматриваете?',
  answer_alias: 'sizes',
  answers: [{
    answer_title: 'менее 36',
    type: 'checkbox'
  }, {
    answer_title: '36-38',
    type: 'checkbox'
  }, {
    answer_title: '39-41',
    type: 'checkbox'
  }, {
    answer_title: '42-44',
    type: 'checkbox'
  }, {
    answer_title: '45 и больше',
    type: 'checkbox'
  }]
}, {
  number: 3,
  title: 'Оставьте свой телефон, мы вам перезвоним',
  answer_alias: 'phone',
  answers: [{
    answer_title: 'Введите сообщение',
    type: 'textarea'
  }]
}, {
  number: 4,
  title: 'Оставьте свой телефон, мы вам перезвоним',
  answer_alias: 'phone',
  answers: [{
    answer_title: 'Введите телефон',
    type: 'textarea'
  }]
}];

const quizTemplate = (data = [], dataLength = 0, options) => {
  const {
    number,
    title
  } = data;
  const {
    nextBtnText
  } = options;
  const answers = data.answers.map(item => {
    if (item.type === 'checkbox') {
      return `
      <li class="quiz__question__item">
      <label class="quiz-question__label">
      <img src="assets/img/quiz/snikers.jpg" alt="snikers">
          <input type="${item.type}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" ${item.type == 'text' ? 'placeholder="Введите ваш вариант"' : ''} value="${item.type !== 'text' ? item.answer_title : ''}">
          <span>${item.answer_title}</span>
        </label>
        </li>
      `;
    } else if (item.type === 'textarea') {
      return `
        <label class="quiz-question__label">
        <textarea placeholder="${item.answer_title}" class="quiz-question__message"></textarea>
          
        </label>
`;
    }
  });
  return `
  			<div class="quiz-question">
				<h3 class="quiz-question__title">${title}</h3>
				<ul class="quiz-question__answers">
					${answers.join('')}
				</ul>
        <div class="quiz__bottom">
			<div class="quiz-question__count">${number} из ${dataLength}</div>
      <button type="button " class="quiz-question__btn btn btn-reset btn--thirdly" data-next-btn>${nextBtnText}</button>

        </div>
		</div>
	`;
};

class Quiz {
  constructor(selector, data, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.data = data;
    this.counter = 0;
    this.dataLength = this.data.length;
    this.resultArray = [];
    this.tmp = {};
    this.init();
    this.events();
  }

  init() {
    console.log('init!');
    this.$el.innerHTML = quizTemplate(this.data[this.counter], this.dataLength, this.options);
  }

  nextQuestion() {
    console.log('next question!');

    if (this.valid()) {
      if (this.counter + 1 < this.dataLength) {
        this.counter++;
        this.$el.innerHTML = quizTemplate(this.data[this.counter], this.dataLength, this.options);

        if (this.counter + 1 == this.dataLength) {// this.$el
          //   .querySelector('quiz-bottom')
          //   .insertAdjacentHTML(
          //     'beforeend',
          //     `<button type="button" data-send>${this.options.sendBtnText}</button>`,
          //   );
          // this.$el.querySelector('[data-next-btn]').remove();
        }
      } else {
        document.querySelector('.quiz-questions').style.display = 'none';
        document.querySelector('.asd').style.display = 'block';
        console.log('А все! конец!');
      }
    } else {
      console.log('Не валидно!');
    }
  }

  events() {
    console.log('events!');
    this.$el.addEventListener('click', e => {
      if (e.target == document.querySelector('[data-next-btn]')) {
        this.addToSend();
        this.nextQuestion();
      }

      if (e.target == document.querySelector('[data-send]')) {
        this.send();
      }
    });
    this.$el.addEventListener('change', e => {
      if (e.target.tagName == 'INPUT') {
        if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
          let elements = this.$el.querySelectorAll('input');
          elements.forEach(el => {
            el.checked = false;
          });
        }

        this.tmp = this.serialize(this.$el);
      }
    });
  }

  valid() {
    let isValid = false;
    let textarea = this.$el.querySelector('textarea');

    if (textarea) {
      isValid = true;
      return isValid;
    }

    let elements = this.$el.querySelectorAll('input');
    elements.forEach(el => {
      switch (el.nodeName) {
        case 'INPUT':
          switch (el.type) {
            case 'text':
              if (el.value) {
                isValid = true;
              } else {
                el.classList.add('error');
              }

            case 'checkbox':
              if (el.checked) {
                isValid = true;
              } else {
                el.classList.add('error');
              }

            case 'radio':
              if (el.checked) {
                isValid = true;
              } else {
                el.classList.add('error');
              }

          }

      }
    });
    return isValid;
  }

  addToSend() {
    this.resultArray.push(this.tmp);
  }

  send() {
    if (this.valid()) {
      const formData = new FormData();

      for (let item of this.resultArray) {
        for (let obj in item) {
          formData.append(obj, item[obj].substring(0, item[obj].length - 1));
        }
      }

      const response = fetch('mail.php', {
        method: 'POST',
        body: formData
      });
    }
  }

  serialize(form) {
    let field,
        s = {};
    let valueString = '';

    if (typeof form == 'object' && form.nodeName == 'FORM') {
      let len = form.elements.length;

      for (let i = 0; i < len; i++) {
        field = form.elements[i];

        if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
          if (field.type == 'select-multiple') {
            for (j = form.elements[i].options.length - 1; j >= 0; j--) {
              if (field.options[j].selected) s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value);
            }
          } else if (field.type != 'checkbox' && field.type != 'radio' && field.value || field.checked) {
            valueString += field.value + ',';
            s[field.name] = valueString;
          }
        }
      }
    }

    return s;
  }

}

/***/ }),

/***/ "./src/js/modules/range-slider.js":
/*!****************************************!*\
  !*** ./src/js/modules/range-slider.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/nouislider.min */ "./src/js/vendor/nouislider.min.js");
/* harmony import */ var _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_0__);


const rangeSliderArticle = () => {
  const rangeSlider = document.getElementById('range-slider');

  if (rangeSlider) {
    _vendor_nouislider_min__WEBPACK_IMPORTED_MODULE_0___default.a.create(rangeSlider, {
      start: [0, 50000],
      connect: true,
      step: 1,
      range: {
        min: [0],
        max: [50000]
      }
    });
    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangleSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      console.log(arr);
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener('change', e => {
        setRangleSlider(index, e.currentTarget.value);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rangeSliderArticle);

/***/ }),

/***/ "./src/js/vendor/nouislider.min.js":
/*!*****************************************!*\
  !*** ./src/js/vendor/nouislider.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 14.7.0 - 4/6/2021 */
!function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function () {
  'use strict';

  var lt = '14.7.0';

  function ut(t) {
    t.parentElement.removeChild(t);
  }

  function ct(t) {
    return null != t;
  }

  function pt(t) {
    t.preventDefault();
  }

  function o(t) {
    return 'number' == typeof t && !isNaN(t) && isFinite(t);
  }

  function ft(t, e, r) {
    0 < r && (mt(t, e), setTimeout(function () {
      gt(t, e);
    }, r));
  }

  function dt(t) {
    return Math.max(Math.min(t, 100), 0);
  }

  function ht(t) {
    return Array.isArray(t) ? t : [t];
  }

  function e(t) {
    var e = (t = String(t)).split('.');
    return 1 < e.length ? e[1].length : 0;
  }

  function mt(t, e) {
    t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += ' ' + e;
  }

  function gt(t, e) {
    t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  function vt(t) {
    var e = void 0 !== window.pageXOffset,
        r = 'CSS1Compat' === (t.compatMode || '');
    return {
      x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
      y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
    };
  }

  function c(t, e) {
    return 100 / (e - t);
  }

  function p(t, e, r) {
    return 100 * e / (t[r + 1] - t[r]);
  }

  function f(t, e) {
    for (var r = 1; t >= e[r];) r += 1;

    return r;
  }

  function r(t, e, r) {
    if (r >= t.slice(-1)[0]) return 100;
    var n,
        i,
        o = f(r, t),
        s = t[o - 1],
        a = t[o],
        l = e[o - 1],
        u = e[o];
    return l + (i = r, p(n = [s, a], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0], 0) / c(l, u));
  }

  function n(t, e, r, n) {
    if (100 === n) return n;
    var i,
        o,
        s = f(n, t),
        a = t[s - 1],
        l = t[s];
    return r ? (l - a) / 2 < n - a ? l : a : e[s - 1] ? t[s - 1] + (i = n - t[s - 1], o = e[s - 1], Math.round(i / o) * o) : n;
  }

  function s(t, e, r) {
    var n;
    if ('number' == typeof e && (e = [e]), !Array.isArray(e)) throw new Error('noUiSlider (' + lt + "): 'range' contains invalid value.");
    if (!o(n = 'min' === t ? 0 : 'max' === t ? 100 : parseFloat(t)) || !o(e[0])) throw new Error('noUiSlider (' + lt + "): 'range' value isn't numeric.");
    r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0);
  }

  function a(t, e, r) {
    if (e) if (r.xVal[t] !== r.xVal[t + 1]) {
      r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e, 0) / c(r.xPct[t], r.xPct[t + 1]);
      var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
          i = Math.ceil(Number(n.toFixed(3)) - 1),
          o = r.xVal[t] + r.xNumSteps[t] * i;
      r.xHighestCompleteStep[t] = o;
    } else r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t];
  }

  function i(t, e, r) {
    var n;
    this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
    var i = [];

    for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);

    for (i.length && 'object' == typeof i[0][0] ? i.sort(function (t, e) {
      return t[0][0] - e[0][0];
    }) : i.sort(function (t, e) {
      return t[0] - e[0];
    }), n = 0; n < i.length; n++) s(i[n][1], i[n][0], this);

    for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this);
  }

  i.prototype.getDistance = function (t) {
    var e,
        r = [];

    for (e = 0; e < this.xNumSteps.length - 1; e++) {
      var n = this.xNumSteps[e];
      if (n && t / n % 1 != 0) throw new Error('noUiSlider (' + lt + "): 'limit', 'margin' and 'padding' of " + this.xPct[e] + '% range must be divisible by step.');
      r[e] = p(this.xVal, t, e);
    }

    return r;
  }, i.prototype.getAbsoluteDistance = function (t, e, r) {
    var n,
        i = 0;
    if (t < this.xPct[this.xPct.length - 1]) for (; t > this.xPct[i + 1];) i++;else t === this.xPct[this.xPct.length - 1] && (i = this.xPct.length - 2);
    r || t !== this.xPct[i + 1] || i++;
    var o = 1,
        s = e[i],
        a = 0,
        l = 0,
        u = 0,
        c = 0;

    for (n = r ? (t - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i]) : (this.xPct[i + 1] - t) / (this.xPct[i + 1] - this.xPct[i]); 0 < s;) a = this.xPct[i + 1 + c] - this.xPct[i + c], 100 < e[i + c] * o + 100 - 100 * n ? (l = a * n, o = (s - 100 * n) / e[i + c], n = 1) : (l = e[i + c] * a / 100 * o, o = 0), r ? (u -= l, 1 <= this.xPct.length + c && c--) : (u += l, 1 <= this.xPct.length - c && c++), s = e[i + c] * o;

    return t + u;
  }, i.prototype.toStepping = function (t) {
    return t = r(this.xVal, this.xPct, t);
  }, i.prototype.fromStepping = function (t) {
    return function (t, e, r) {
      if (100 <= r) return t.slice(-1)[0];
      var n,
          i = f(r, e),
          o = t[i - 1],
          s = t[i],
          a = e[i - 1],
          l = e[i];
      return n = [o, s], (r - a) * c(a, l) * (n[1] - n[0]) / 100 + n[0];
    }(this.xVal, this.xPct, t);
  }, i.prototype.getStep = function (t) {
    return t = n(this.xPct, this.xSteps, this.snap, t);
  }, i.prototype.getDefaultStep = function (t, e, r) {
    var n = f(t, this.xPct);
    return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r;
  }, i.prototype.getNearbySteps = function (t) {
    var e = f(t, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[e - 2],
        step: this.xNumSteps[e - 2],
        highestStep: this.xHighestCompleteStep[e - 2]
      },
      thisStep: {
        startValue: this.xVal[e - 1],
        step: this.xNumSteps[e - 1],
        highestStep: this.xHighestCompleteStep[e - 1]
      },
      stepAfter: {
        startValue: this.xVal[e],
        step: this.xNumSteps[e],
        highestStep: this.xHighestCompleteStep[e]
      }
    };
  }, i.prototype.countStepDecimals = function () {
    var t = this.xNumSteps.map(e);
    return Math.max.apply(null, t);
  }, i.prototype.convert = function (t) {
    return this.getStep(this.toStepping(t));
  };
  var l = {
    to: function (t) {
      return void 0 !== t && t.toFixed(2);
    },
    from: Number
  },
      u = {
    target: 'target',
    base: 'base',
    origin: 'origin',
    handle: 'handle',
    handleLower: 'handle-lower',
    handleUpper: 'handle-upper',
    touchArea: 'touch-area',
    horizontal: 'horizontal',
    vertical: 'vertical',
    background: 'background',
    connect: 'connect',
    connects: 'connects',
    ltr: 'ltr',
    rtl: 'rtl',
    textDirectionLtr: 'txt-dir-ltr',
    textDirectionRtl: 'txt-dir-rtl',
    draggable: 'draggable',
    drag: 'state-drag',
    tap: 'state-tap',
    active: 'active',
    tooltip: 'tooltip',
    pips: 'pips',
    pipsHorizontal: 'pips-horizontal',
    pipsVertical: 'pips-vertical',
    marker: 'marker',
    markerHorizontal: 'marker-horizontal',
    markerVertical: 'marker-vertical',
    markerNormal: 'marker-normal',
    markerLarge: 'marker-large',
    markerSub: 'marker-sub',
    value: 'value',
    valueHorizontal: 'value-horizontal',
    valueVertical: 'value-vertical',
    valueNormal: 'value-normal',
    valueLarge: 'value-large',
    valueSub: 'value-sub'
  },
      bt = {
    tooltips: '.__tooltips',
    aria: '.__aria'
  };

  function d(t) {
    if ('object' == typeof (e = t) && 'function' == typeof e.to && 'function' == typeof e.from) return !0;
    var e;
    throw new Error('noUiSlider (' + lt + "): 'format' requires 'to' and 'from' methods.");
  }

  function h(t, e) {
    if (!o(e)) throw new Error('noUiSlider (' + lt + "): 'step' is not numeric.");
    t.singleStep = e;
  }

  function m(t, e) {
    if (!o(e)) throw new Error('noUiSlider (' + lt + "): 'keyboardPageMultiplier' is not numeric.");
    t.keyboardPageMultiplier = e;
  }

  function g(t, e) {
    if (!o(e)) throw new Error('noUiSlider (' + lt + "): 'keyboardDefaultStep' is not numeric.");
    t.keyboardDefaultStep = e;
  }

  function v(t, e) {
    if ('object' != typeof e || Array.isArray(e)) throw new Error('noUiSlider (' + lt + "): 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max) throw new Error('noUiSlider (' + lt + "): Missing 'min' or 'max' in 'range'.");
    if (e.min === e.max) throw new Error('noUiSlider (' + lt + "): 'range' 'min' and 'max' cannot be equal.");
    t.spectrum = new i(e, t.snap, t.singleStep);
  }

  function b(t, e) {
    if (e = ht(e), !Array.isArray(e) || !e.length) throw new Error('noUiSlider (' + lt + "): 'start' option is incorrect.");
    t.handles = e.length, t.start = e;
  }

  function x(t, e) {
    if ('boolean' != typeof (t.snap = e)) throw new Error('noUiSlider (' + lt + "): 'snap' option must be a boolean.");
  }

  function S(t, e) {
    if ('boolean' != typeof (t.animate = e)) throw new Error('noUiSlider (' + lt + "): 'animate' option must be a boolean.");
  }

  function w(t, e) {
    if ('number' != typeof (t.animationDuration = e)) throw new Error('noUiSlider (' + lt + "): 'animationDuration' option must be a number.");
  }

  function y(t, e) {
    var r,
        n = [!1];

    if ('lower' === e ? e = [!0, !1] : 'upper' === e && (e = [!1, !0]), !0 === e || !1 === e) {
      for (r = 1; r < t.handles; r++) n.push(e);

      n.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error('noUiSlider (' + lt + "): 'connect' option doesn't match handle count.");
      n = e;
    }

    t.connect = n;
  }

  function E(t, e) {
    switch (e) {
      case 'horizontal':
        t.ort = 0;
        break;

      case 'vertical':
        t.ort = 1;
        break;

      default:
        throw new Error('noUiSlider (' + lt + "): 'orientation' option is invalid.");
    }
  }

  function C(t, e) {
    if (!o(e)) throw new Error('noUiSlider (' + lt + "): 'margin' option must be numeric.");
    0 !== e && (t.margin = t.spectrum.getDistance(e));
  }

  function P(t, e) {
    if (!o(e)) throw new Error('noUiSlider (' + lt + "): 'limit' option must be numeric.");
    if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2) throw new Error('noUiSlider (' + lt + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
  }

  function N(t, e) {
    var r;
    if (!o(e) && !Array.isArray(e)) throw new Error('noUiSlider (' + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1])) throw new Error('noUiSlider (' + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");

    if (0 !== e) {
      for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++) if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error('noUiSlider (' + lt + "): 'padding' option must be a positive number(s).");

      var n = e[0] + e[1],
          i = t.spectrum.xVal[0];
      if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - i)) throw new Error('noUiSlider (' + lt + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function k(t, e) {
    switch (e) {
      case 'ltr':
        t.dir = 0;
        break;

      case 'rtl':
        t.dir = 1;
        break;

      default:
        throw new Error('noUiSlider (' + lt + "): 'direction' option was not recognized.");
    }
  }

  function U(t, e) {
    if ('string' != typeof e) throw new Error('noUiSlider (' + lt + "): 'behaviour' must be a string containing options.");
    var r = 0 <= e.indexOf('tap'),
        n = 0 <= e.indexOf('drag'),
        i = 0 <= e.indexOf('fixed'),
        o = 0 <= e.indexOf('snap'),
        s = 0 <= e.indexOf('hover'),
        a = 0 <= e.indexOf('unconstrained');

    if (i) {
      if (2 !== t.handles) throw new Error('noUiSlider (' + lt + "): 'fixed' behaviour must be used with 2 handles");
      C(t, t.start[1] - t.start[0]);
    }

    if (a && (t.margin || t.limit)) throw new Error('noUiSlider (' + lt + "): 'unconstrained' behaviour cannot be used with margin or limit");
    t.events = {
      tap: r || o,
      drag: n,
      fixed: i,
      snap: o,
      hover: s,
      unconstrained: a
    };
  }

  function A(t, e) {
    if (!1 !== e) if (!0 === e) {
      t.tooltips = [];

      for (var r = 0; r < t.handles; r++) t.tooltips.push(!0);
    } else {
      if (t.tooltips = ht(e), t.tooltips.length !== t.handles) throw new Error('noUiSlider (' + lt + '): must pass a formatter for all handles.');
      t.tooltips.forEach(function (t) {
        if ('boolean' != typeof t && ('object' != typeof t || 'function' != typeof t.to)) throw new Error('noUiSlider (' + lt + "): 'tooltips' must be passed a formatter or 'false'.");
      });
    }
  }

  function V(t, e) {
    d(t.ariaFormat = e);
  }

  function D(t, e) {
    d(t.format = e);
  }

  function M(t, e) {
    if ('boolean' != typeof (t.keyboardSupport = e)) throw new Error('noUiSlider (' + lt + "): 'keyboardSupport' option must be a boolean.");
  }

  function O(t, e) {
    t.documentElement = e;
  }

  function L(t, e) {
    if ('string' != typeof e && !1 !== e) throw new Error('noUiSlider (' + lt + "): 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }

  function z(t, e) {
    if ('object' != typeof e) throw new Error('noUiSlider (' + lt + "): 'cssClasses' must be an object.");
    if ('string' == typeof t.cssPrefix) for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);else t.cssClasses = e;
  }

  function xt(e) {
    var r = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: !0,
      animationDuration: 300,
      ariaFormat: l,
      format: l
    },
        n = {
      step: {
        r: !1,
        t: h
      },
      keyboardPageMultiplier: {
        r: !1,
        t: m
      },
      keyboardDefaultStep: {
        r: !1,
        t: g
      },
      start: {
        r: !0,
        t: b
      },
      connect: {
        r: !0,
        t: y
      },
      direction: {
        r: !0,
        t: k
      },
      snap: {
        r: !1,
        t: x
      },
      animate: {
        r: !1,
        t: S
      },
      animationDuration: {
        r: !1,
        t: w
      },
      range: {
        r: !0,
        t: v
      },
      orientation: {
        r: !1,
        t: E
      },
      margin: {
        r: !1,
        t: C
      },
      limit: {
        r: !1,
        t: P
      },
      padding: {
        r: !1,
        t: N
      },
      behaviour: {
        r: !0,
        t: U
      },
      ariaFormat: {
        r: !1,
        t: V
      },
      format: {
        r: !1,
        t: D
      },
      tooltips: {
        r: !1,
        t: A
      },
      keyboardSupport: {
        r: !0,
        t: M
      },
      documentElement: {
        r: !1,
        t: O
      },
      cssPrefix: {
        r: !0,
        t: L
      },
      cssClasses: {
        r: !0,
        t: z
      }
    },
        i = {
      connect: !1,
      direction: 'ltr',
      behaviour: 'tap',
      orientation: 'horizontal',
      keyboardSupport: !0,
      cssPrefix: 'noUi-',
      cssClasses: u,
      keyboardPageMultiplier: 5,
      keyboardDefaultStep: 10
    };
    e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
      if (!ct(e[t]) && void 0 === i[t]) {
        if (n[t].r) throw new Error('noUiSlider (' + lt + "): '" + t + "' is required.");
        return !0;
      }

      n[t].t(r, ct(e[t]) ? e[t] : i[t]);
    }), r.pips = e.pips;
    var t = document.createElement('div'),
        o = void 0 !== t.style.msTransform,
        s = void 0 !== t.style.transform;
    r.transformRule = s ? 'transform' : o ? 'msTransform' : 'webkitTransform';
    return r.style = [['left', 'top'], ['right', 'bottom']][r.dir][r.ort], r;
  }

  function H(t, b, o) {
    var l,
        u,
        s,
        c,
        i,
        a,
        e,
        p,
        f = window.navigator.pointerEnabled ? {
      start: 'pointerdown',
      move: 'pointermove',
      end: 'pointerup'
    } : window.navigator.msPointerEnabled ? {
      start: 'MSPointerDown',
      move: 'MSPointerMove',
      end: 'MSPointerUp'
    } : {
      start: 'mousedown touchstart',
      move: 'mousemove touchmove',
      end: 'mouseup touchend'
    },
        d = window.CSS && CSS.supports && CSS.supports('touch-action', 'none') && function () {
      var t = !1;

      try {
        var e = Object.defineProperty({}, 'passive', {
          get: function () {
            t = !0;
          }
        });
        window.addEventListener('test', null, e);
      } catch (t) {}

      return t;
    }(),
        h = t,
        y = b.spectrum,
        x = [],
        S = [],
        m = [],
        g = 0,
        v = {},
        w = t.ownerDocument,
        E = b.documentElement || w.documentElement,
        C = w.body,
        P = -1,
        N = 0,
        k = 1,
        U = 2,
        A = 'rtl' === w.dir || 1 === b.ort ? 0 : 100;

    function V(t, e) {
      var r = w.createElement('div');
      return e && mt(r, e), t.appendChild(r), r;
    }

    function D(t, e) {
      var r = V(t, b.cssClasses.origin),
          n = V(r, b.cssClasses.handle);
      return V(n, b.cssClasses.touchArea), n.setAttribute('data-handle', e), b.keyboardSupport && (n.setAttribute('tabindex', '0'), n.addEventListener('keydown', function (t) {
        return function (t, e) {
          if (O() || L(e)) return !1;
          var r = ['Left', 'Right'],
              n = ['Down', 'Up'],
              i = ['PageDown', 'PageUp'],
              o = ['Home', 'End'];
          b.dir && !b.ort ? r.reverse() : b.ort && !b.dir && (n.reverse(), i.reverse());
          var s,
              a = t.key.replace('Arrow', ''),
              l = a === i[0],
              u = a === i[1],
              c = a === n[0] || a === r[0] || l,
              p = a === n[1] || a === r[1] || u,
              f = a === o[0],
              d = a === o[1];
          if (!(c || p || f || d)) return !0;

          if (t.preventDefault(), p || c) {
            var h = b.keyboardPageMultiplier,
                m = c ? 0 : 1,
                g = at(e),
                v = g[m];
            if (null === v) return !1;
            !1 === v && (v = y.getDefaultStep(S[e], c, b.keyboardDefaultStep)), (u || l) && (v *= h), v = Math.max(v, 1e-7), v *= c ? -1 : 1, s = x[e] + v;
          } else s = d ? b.spectrum.xVal[b.spectrum.xVal.length - 1] : b.spectrum.xVal[0];

          return rt(e, y.toStepping(s), !0, !0), J('slide', e), J('update', e), J('change', e), J('set', e), !1;
        }(t, e);
      })), n.setAttribute('role', 'slider'), n.setAttribute('aria-orientation', b.ort ? 'vertical' : 'horizontal'), 0 === e ? mt(n, b.cssClasses.handleLower) : e === b.handles - 1 && mt(n, b.cssClasses.handleUpper), r;
    }

    function M(t, e) {
      return !!e && V(t, b.cssClasses.connect);
    }

    function r(t, e) {
      return !!b.tooltips[e] && V(t.firstChild, b.cssClasses.tooltip);
    }

    function O() {
      return h.hasAttribute('disabled');
    }

    function L(t) {
      return u[t].hasAttribute('disabled');
    }

    function z() {
      i && (G('update' + bt.tooltips), i.forEach(function (t) {
        t && ut(t);
      }), i = null);
    }

    function H() {
      z(), i = u.map(r), $('update' + bt.tooltips, function (t, e, r) {
        if (i[e]) {
          var n = t[e];
          !0 !== b.tooltips[e] && (n = b.tooltips[e].to(r[e])), i[e].innerHTML = n;
        }
      });
    }

    function j(e, i, o) {
      var s = w.createElement('div'),
          a = [];
      a[N] = b.cssClasses.valueNormal, a[k] = b.cssClasses.valueLarge, a[U] = b.cssClasses.valueSub;
      var l = [];
      l[N] = b.cssClasses.markerNormal, l[k] = b.cssClasses.markerLarge, l[U] = b.cssClasses.markerSub;
      var u = [b.cssClasses.valueHorizontal, b.cssClasses.valueVertical],
          c = [b.cssClasses.markerHorizontal, b.cssClasses.markerVertical];

      function p(t, e) {
        var r = e === b.cssClasses.value,
            n = r ? a : l;
        return e + ' ' + (r ? u : c)[b.ort] + ' ' + n[t];
      }

      return mt(s, b.cssClasses.pips), mt(s, 0 === b.ort ? b.cssClasses.pipsHorizontal : b.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
        !function (t, e, r) {
          if ((r = i ? i(e, r) : r) !== P) {
            var n = V(s, !1);
            n.className = p(r, b.cssClasses.marker), n.style[b.style] = t + '%', N < r && ((n = V(s, !1)).className = p(r, b.cssClasses.value), n.setAttribute('data-value', e), n.style[b.style] = t + '%', n.innerHTML = o.to(e));
          }
        }(t, e[t][0], e[t][1]);
      }), s;
    }

    function F() {
      c && (ut(c), c = null);
    }

    function R(t) {
      F();

      var m,
          g,
          v,
          b,
          e,
          r,
          x,
          S,
          w,
          n = t.mode,
          i = t.density || 1,
          o = t.filter || !1,
          s = function (t, e, r) {
        if ('range' === t || 'steps' === t) return y.xVal;

        if ('count' === t) {
          if (e < 2) throw new Error('noUiSlider (' + lt + "): 'values' (>= 2) required for mode 'count'.");
          var n = e - 1,
              i = 100 / n;

          for (e = []; n--;) e[n] = n * i;

          e.push(100), t = 'positions';
        }

        return 'positions' === t ? e.map(function (t) {
          return y.fromStepping(r ? y.getStep(t) : t);
        }) : 'values' === t ? r ? e.map(function (t) {
          return y.fromStepping(y.getStep(y.toStepping(t)));
        }) : e : void 0;
      }(n, t.values || !1, t.stepped || !1),
          a = (m = i, g = n, v = s, b = {}, e = y.xVal[0], r = y.xVal[y.xVal.length - 1], S = x = !1, w = 0, (v = v.slice().sort(function (t, e) {
        return t - e;
      }).filter(function (t) {
        return !this[t] && (this[t] = !0);
      }, {}))[0] !== e && (v.unshift(e), x = !0), v[v.length - 1] !== r && (v.push(r), S = !0), v.forEach(function (t, e) {
        var r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            p,
            f = t,
            d = v[e + 1],
            h = 'steps' === g;
        if (h && (r = y.xNumSteps[e]), r || (r = d - f), !1 !== f) for (void 0 === d && (d = f), r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
          for (u = (s = (o = y.toStepping(n)) - w) / m, p = s / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(a = w + i * p).toFixed(5)] = [y.fromStepping(a), 0];

          l = -1 < v.indexOf(n) ? k : h ? U : N, !e && x && n !== d && (l = 0), n === d && S || (b[o.toFixed(5)] = [n, l]), w = o;
        }
      }), b),
          l = t.format || {
        to: Math.round
      };

      return c = h.appendChild(j(a, o, l));
    }

    function T() {
      var t = l.getBoundingClientRect(),
          e = 'offset' + ['Width', 'Height'][b.ort];
      return 0 === b.ort ? t.width || l[e] : t.height || l[e];
    }

    function _(n, i, o, s) {
      var e = function (t) {
        return !!(t = function (t, e, r) {
          var n,
              i,
              o = 0 === t.type.indexOf('touch'),
              s = 0 === t.type.indexOf('mouse'),
              a = 0 === t.type.indexOf('pointer');
          0 === t.type.indexOf('MSPointer') && (a = !0);
          if ('mousedown' === t.type && !t.buttons && !t.touches) return !1;

          if (o) {
            var l = function (t) {
              return t.target === r || r.contains(t.target) || t.target.shadowRoot && t.target.shadowRoot.contains(r);
            };

            if ('touchstart' === t.type) {
              var u = Array.prototype.filter.call(t.touches, l);
              if (1 < u.length) return !1;
              n = u[0].pageX, i = u[0].pageY;
            } else {
              var c = Array.prototype.find.call(t.changedTouches, l);
              if (!c) return !1;
              n = c.pageX, i = c.pageY;
            }
          }

          e = e || vt(w), (s || a) && (n = t.clientX + e.x, i = t.clientY + e.y);
          return t.pageOffset = e, t.points = [n, i], t.cursor = s || a, t;
        }(t, s.pageOffset, s.target || i)) && !(O() && !s.doNotReject) && (e = h, r = b.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp('\\b' + r + '\\b').test(e.className)) && !s.doNotReject) && !(n === f.start && void 0 !== t.buttons && 1 < t.buttons) && (!s.hover || !t.buttons) && (d || t.preventDefault(), t.calcPoint = t.points[b.ort], void o(t, s)));
        var e, r;
      },
          r = [];

      return n.split(' ').forEach(function (t) {
        i.addEventListener(t, e, !!d && {
          passive: !0
        }), r.push([t, e]);
      }), r;
    }

    function B(t) {
      var e,
          r,
          n,
          i,
          o,
          s,
          a = 100 * (t - (e = l, r = b.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, s = vt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0), r ? n.top + s.y - o.clientTop : n.left + s.x - o.clientLeft)) / T();
      return a = dt(a), b.dir ? 100 - a : a;
    }

    function q(t, e) {
      'mouseout' === t.type && 'HTML' === t.target.nodeName && null === t.relatedTarget && Y(t, e);
    }

    function X(t, e) {
      if (-1 === navigator.appVersion.indexOf('MSIE 9') && 0 === t.buttons && 0 !== e.buttonsProperty) return Y(t, e);
      var r = (b.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
      Z(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers);
    }

    function Y(t, e) {
      e.handle && (gt(e.handle, b.cssClasses.active), g -= 1), e.listeners.forEach(function (t) {
        E.removeEventListener(t[0], t[1]);
      }), 0 === g && (gt(h, b.cssClasses.drag), et(), t.cursor && (C.style.cursor = '', C.removeEventListener('selectstart', pt))), e.handleNumbers.forEach(function (t) {
        J('change', t), J('set', t), J('end', t);
      });
    }

    function I(t, e) {
      if (e.handleNumbers.some(L)) return !1;
      var r;
      1 === e.handleNumbers.length && (r = u[e.handleNumbers[0]].children[0], g += 1, mt(r, b.cssClasses.active));
      t.stopPropagation();

      var n = [],
          i = _(f.move, E, X, {
        target: t.target,
        handle: r,
        listeners: n,
        startCalcPoint: t.calcPoint,
        baseSize: T(),
        pageOffset: t.pageOffset,
        handleNumbers: e.handleNumbers,
        buttonsProperty: t.buttons,
        locations: S.slice()
      }),
          o = _(f.end, E, Y, {
        target: t.target,
        handle: r,
        listeners: n,
        doNotReject: !0,
        handleNumbers: e.handleNumbers
      }),
          s = _('mouseout', E, q, {
        target: t.target,
        handle: r,
        listeners: n,
        doNotReject: !0,
        handleNumbers: e.handleNumbers
      });

      n.push.apply(n, i.concat(o, s)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && mt(h, b.cssClasses.drag), C.addEventListener('selectstart', pt, !1)), e.handleNumbers.forEach(function (t) {
        J('start', t);
      });
    }

    function n(t) {
      t.stopPropagation();
      var i,
          o,
          s,
          e = B(t.calcPoint),
          r = (i = e, s = !(o = 100), u.forEach(function (t, e) {
        if (!L(e)) {
          var r = S[e],
              n = Math.abs(r - i);
          (n < o || n <= o && r < i || 100 === n && 100 === o) && (s = e, o = n);
        }
      }), s);
      if (!1 === r) return !1;
      b.events.snap || ft(h, b.cssClasses.tap, b.animationDuration), rt(r, e, !0, !0), et(), J('slide', r, !0), J('update', r, !0), J('change', r, !0), J('set', r, !0), b.events.snap && I(t, {
        handleNumbers: [r]
      });
    }

    function W(t) {
      var e = B(t.calcPoint),
          r = y.getStep(e),
          n = y.fromStepping(r);
      Object.keys(v).forEach(function (t) {
        'hover' === t.split('.')[0] && v[t].forEach(function (t) {
          t.call(a, n);
        });
      });
    }

    function $(t, e) {
      v[t] = v[t] || [], v[t].push(e), 'update' === t.split('.')[0] && u.forEach(function (t, e) {
        J('update', e);
      });
    }

    function G(t) {
      var i = t && t.split('.')[0],
          o = i ? t.substring(i.length) : t;
      Object.keys(v).forEach(function (t) {
        var e,
            r = t.split('.')[0],
            n = t.substring(r.length);
        i && i !== r || o && o !== n || ((e = n) !== bt.aria && e !== bt.tooltips || o === n) && delete v[t];
      });
    }

    function J(r, n, i) {
      Object.keys(v).forEach(function (t) {
        var e = t.split('.')[0];
        r === e && v[t].forEach(function (t) {
          t.call(a, x.map(b.format.to), n, x.slice(), i || !1, S.slice(), a);
        });
      });
    }

    function K(t, e, r, n, i, o) {
      var s;
      return 1 < u.length && !b.events.unconstrained && (n && 0 < e && (s = y.getAbsoluteDistance(t[e - 1], b.margin, 0), r = Math.max(r, s)), i && e < u.length - 1 && (s = y.getAbsoluteDistance(t[e + 1], b.margin, 1), r = Math.min(r, s))), 1 < u.length && b.limit && (n && 0 < e && (s = y.getAbsoluteDistance(t[e - 1], b.limit, 0), r = Math.min(r, s)), i && e < u.length - 1 && (s = y.getAbsoluteDistance(t[e + 1], b.limit, 1), r = Math.max(r, s))), b.padding && (0 === e && (s = y.getAbsoluteDistance(0, b.padding[0], 0), r = Math.max(r, s)), e === u.length - 1 && (s = y.getAbsoluteDistance(100, b.padding[1], 1), r = Math.min(r, s))), !((r = dt(r = y.getStep(r))) === t[e] && !o) && r;
    }

    function Q(t, e) {
      var r = b.ort;
      return (r ? e : t) + ', ' + (r ? t : e);
    }

    function Z(t, n, r, e) {
      var i = r.slice(),
          o = [!t, t],
          s = [t, !t];
      e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
        var r = K(i, t, i[t] + n, o[e], s[e], !1);
        !1 === r ? n = 0 : (n = r - i[t], i[t] = r);
      }) : o = s = [!0];
      var a = !1;
      e.forEach(function (t, e) {
        a = rt(t, r[t] + n, o[e], s[e]) || a;
      }), a && e.forEach(function (t) {
        J('update', t), J('slide', t);
      });
    }

    function tt(t, e) {
      return b.dir ? 100 - t - e : t;
    }

    function et() {
      m.forEach(function (t) {
        var e = 50 < S[t] ? -1 : 1,
            r = 3 + (u.length + e * t);
        u[t].style.zIndex = r;
      });
    }

    function rt(t, e, r, n, i) {
      return i || (e = K(S, t, e, r, n, !1)), !1 !== e && (function (t, e) {
        S[t] = e, x[t] = y.fromStepping(e);
        var r = 'translate(' + Q(10 * (tt(e, 0) - A) + '%', '0') + ')';
        u[t].style[b.transformRule] = r, nt(t), nt(t + 1);
      }(t, e), !0);
    }

    function nt(t) {
      if (s[t]) {
        var e = 0,
            r = 100;
        0 !== t && (e = S[t - 1]), t !== s.length - 1 && (r = S[t]);
        var n = r - e,
            i = 'translate(' + Q(tt(e, n) + '%', '0') + ')',
            o = 'scale(' + Q(n / 100, '1') + ')';
        s[t].style[b.transformRule] = i + ' ' + o;
      }
    }

    function it(t, e) {
      return null === t || !1 === t || void 0 === t ? S[e] : ('number' == typeof t && (t = String(t)), t = b.format.from(t), !1 === (t = y.toStepping(t)) || isNaN(t) ? S[e] : t);
    }

    function ot(t, e, r) {
      var n = ht(t),
          i = void 0 === S[0];
      e = void 0 === e || !!e, b.animate && !i && ft(h, b.cssClasses.tap, b.animationDuration), m.forEach(function (t) {
        rt(t, it(n[t], t), !0, !1, r);
      });

      for (var o = 1 === m.length ? 0 : 1; o < m.length; ++o) m.forEach(function (t) {
        rt(t, S[t], !0, !0, r);
      });

      et(), m.forEach(function (t) {
        J('update', t), null !== n[t] && e && J('set', t);
      });
    }

    function st() {
      var t = x.map(b.format.to);
      return 1 === t.length ? t[0] : t;
    }

    function at(t) {
      var e = S[t],
          r = y.getNearbySteps(e),
          n = x[t],
          i = r.thisStep.step,
          o = null;
      if (b.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
      !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (o = null);
      var s = y.countStepDecimals();
      return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, i];
    }

    return mt(e = h, b.cssClasses.target), 0 === b.dir ? mt(e, b.cssClasses.ltr) : mt(e, b.cssClasses.rtl), 0 === b.ort ? mt(e, b.cssClasses.horizontal) : mt(e, b.cssClasses.vertical), mt(e, 'rtl' === getComputedStyle(e).direction ? b.cssClasses.textDirectionRtl : b.cssClasses.textDirectionLtr), l = V(e, b.cssClasses.base), function (t, e) {
      var r = V(e, b.cssClasses.connects);
      u = [], (s = []).push(M(r, t[0]));

      for (var n = 0; n < b.handles; n++) u.push(D(e, n)), m[n] = n, s.push(M(r, t[n + 1]));
    }(b.connect, l), (p = b.events).fixed || u.forEach(function (t, e) {
      _(f.start, t.children[0], I, {
        handleNumbers: [e]
      });
    }), p.tap && _(f.start, l, n, {}), p.hover && _(f.move, l, W, {
      hover: !0
    }), p.drag && s.forEach(function (t, e) {
      if (!1 !== t && 0 !== e && e !== s.length - 1) {
        var r = u[e - 1],
            n = u[e],
            i = [t];
        mt(t, b.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function (t) {
          _(f.start, t, I, {
            handles: [r, n],
            handleNumbers: [e - 1, e]
          });
        });
      }
    }), ot(b.start), b.pips && R(b.pips), b.tooltips && H(), G('update' + bt.aria), $('update' + bt.aria, function (t, e, s, r, a) {
      m.forEach(function (t) {
        var e = u[t],
            r = K(S, t, 0, !0, !0, !0),
            n = K(S, t, 100, !0, !0, !0),
            i = a[t],
            o = b.ariaFormat.to(s[t]);
        r = y.fromStepping(r).toFixed(1), n = y.fromStepping(n).toFixed(1), i = y.fromStepping(i).toFixed(1), e.children[0].setAttribute('aria-valuemin', r), e.children[0].setAttribute('aria-valuemax', n), e.children[0].setAttribute('aria-valuenow', i), e.children[0].setAttribute('aria-valuetext', o);
      });
    }), a = {
      destroy: function () {
        for (var t in G(bt.aria), G(bt.tooltips), b.cssClasses) b.cssClasses.hasOwnProperty(t) && gt(h, b.cssClasses[t]);

        for (; h.firstChild;) h.removeChild(h.firstChild);

        delete h.noUiSlider;
      },
      steps: function () {
        return m.map(at);
      },
      on: $,
      off: G,
      get: st,
      set: ot,
      setHandle: function (t, e, r, n) {
        if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error('noUiSlider (' + lt + '): invalid handle number, got: ' + t);
        rt(t, it(e, t), !0, !0, n), J('update', t), r && J('set', t);
      },
      reset: function (t) {
        ot(b.start, t);
      },
      __moveHandles: function (t, e, r) {
        Z(t, e, S, r);
      },
      options: o,
      updateOptions: function (e, t) {
        var r = st(),
            n = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format', 'pips', 'tooltips'];
        n.forEach(function (t) {
          void 0 !== e[t] && (o[t] = e[t]);
        });
        var i = xt(o);
        n.forEach(function (t) {
          void 0 !== e[t] && (b[t] = i[t]);
        }), y = i.spectrum, b.margin = i.margin, b.limit = i.limit, b.padding = i.padding, b.pips ? R(b.pips) : F(), b.tooltips ? H() : z(), S = [], ot(ct(e.start) ? e.start : r, t);
      },
      target: h,
      removePips: F,
      removeTooltips: z,
      getTooltips: function () {
        return i;
      },
      getOrigins: function () {
        return u;
      },
      pips: R
    };
  }

  return {
    __spectrum: i,
    version: lt,
    cssClasses: u,
    create: function (t, e) {
      if (!t || !t.nodeName) throw new Error('noUiSlider (' + lt + '): create requires a single element, got: ' + t);
      if (t.noUiSlider) throw new Error('noUiSlider (' + lt + '): Slider was already initialized.');
      var r = H(t, xt(e), e);
      return t.noUiSlider = r;
    }
  };
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map