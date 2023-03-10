/*!
 * 
<<<<<<< HEAD
 * Super simple wysiwyg editor v0.8.18
 * https://summernote.org
 * 
 * 
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 * 
 * Date: 2020-05-20T16:47Z
 * 
=======
 * Super simple WYSIWYG editor v0.8.20
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong and contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2021-10-14T21:15Z
 *
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
<<<<<<< HEAD
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports) {

=======
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
(function ($) {
  $.extend($.summernote.lang, {
    'pl-PL': {
      font: {
        bold: 'Pogrubienie',
        italic: 'Pochylenie',
        underline: 'Podkre??lenie',
        clear: 'Usu?? formatowanie',
        height: 'Interlinia',
        name: 'Czcionka',
        strikethrough: 'Przekre??lenie',
        subscript: 'Indeks dolny',
        superscript: 'Indeks g??rny',
        size: 'Rozmiar'
      },
      image: {
        image: 'Grafika',
        insert: 'Wstaw grafik??',
        resizeFull: 'Zmie?? rozmiar na 100%',
        resizeHalf: 'Zmie?? rozmiar na 50%',
        resizeQuarter: 'Zmie?? rozmiar na 25%',
        floatLeft: 'Po lewej',
        floatRight: 'Po prawej',
        floatNone: 'R??wno z tekstem',
        shapeRounded: 'Kszta??t: zaokr??glone',
        shapeCircle: 'Kszta??t: okr??g',
        shapeThumbnail: 'Kszta??t: miniatura',
        shapeNone: 'Kszta??t: brak',
        dragImageHere: 'Przeci??gnij grafik?? lub tekst tutaj',
        dropImage: 'Przeci??gnij grafik?? lub tekst',
        selectFromFiles: 'Wybierz z dysku',
        maximumFileSize: 'Limit wielko??ci pliku',
        maximumFileSizeError: 'Przekroczono limit wielko??ci pliku.',
        url: 'Adres URL grafiki',
        remove: 'Usu?? grafik??',
        original: 'Orygina??'
      },
      video: {
        video: 'Wideo',
        videoLink: 'Adres wideo',
        insert: 'Wstaw wideo',
        url: 'Adres wideo',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion lub Youku)'
      },
      link: {
        link: 'Odno??nik',
        insert: 'Wstaw odno??nik',
        unlink: 'Usu?? odno??nik',
        edit: 'Edytuj',
        textToDisplay: 'Tekst do wy??wietlenia',
        url: 'Na jaki adres URL powinien przenosi?? ten odno??nik?',
        openInNewWindow: 'Otw??rz w nowym oknie'
      },
      table: {
        table: 'Tabela',
        addRowAbove: 'Dodaj wiersz powy??ej',
        addRowBelow: 'Dodaj wiersz poni??ej',
        addColLeft: 'Dodaj kolumn?? po lewej',
        addColRight: 'Dodaj kolumn?? po prawej',
        delRow: 'Usu?? wiersz',
        delCol: 'Usu?? kolumn??',
        delTable: 'Usu?? tabel??'
      },
      hr: {
        insert: 'Wstaw poziom?? lini??'
      },
      style: {
        style: 'Styl',
        p: 'pny',
        blockquote: 'Cytat',
        pre: 'Kod',
        h1: 'Nag????wek 1',
        h2: 'Nag????wek 2',
        h3: 'Nag????wek 3',
        h4: 'Nag????wek 4',
        h5: 'Nag????wek 5',
        h6: 'Nag????wek 6'
      },
      lists: {
        unordered: 'Lista wypunktowana',
        ordered: 'Lista numerowana'
      },
      options: {
        help: 'Pomoc',
        fullscreen: 'Pe??ny ekran',
        codeview: '??r??d??o'
      },
      paragraph: {
        paragraph: 'Akapit',
        outdent: 'Zmniejsz wci??cie',
        indent: 'Zwi??ksz wci??cie',
        left: 'Wyr??wnaj do lewej',
        center: 'Wyr??wnaj do ??rodka',
        right: 'Wyr??wnaj do prawej',
        justify: 'Wyr??wnaj do lewej i prawej'
      },
      color: {
        recent: 'Ostani kolor',
        more: 'Wi??cej kolor??w',
        background: 'T??o',
        foreground: 'Czcionka',
        transparent: 'Prze??roczysty',
        setTransparent: 'Prze??roczyste',
        reset: 'Zresetuj',
        resetToDefault: 'Domy??lne'
      },
      shortcut: {
        shortcuts: 'Skr??ty klawiaturowe',
        close: 'Zamknij',
        textFormatting: 'Formatowanie tekstu',
        action: 'Akcja',
        paragraphFormatting: 'Formatowanie akapitu',
        documentStyle: 'Styl dokumentu',
        extraKeys: 'Dodatkowe klawisze'
      },
      help: {
        'insertParagraph': 'Wstaw paragraf',
        'undo': 'Cofnij poprzedni?? operacj??',
        'redo': 'Przywr???? poprzedni?? operacj??',
        'tab': 'Tabulacja',
        'untab': 'Usu?? tabulacj??',
        'bold': 'Pogrubienie',
        'italic': 'Kursywa',
        'underline': 'Podkre??lenie',
        'strikethrough': 'Przekre??lenie',
        'removeFormat': 'Usu?? formatowanie',
        'justifyLeft': 'Wyr??wnaj do lewej',
        'justifyCenter': 'Wyr??wnaj do ??rodka',
        'justifyRight': 'Wyr??wnaj do prawej',
        'justifyFull': 'Justyfikacja',
        'insertUnorderedList': 'Nienumerowana lista',
        'insertOrderedList': 'Wypunktowana lista',
        'outdent': 'Zmniejsz wci??cie paragrafu',
        'indent': 'Zwi??ksz wci??cie paragrafu',
        'formatPara': 'Zamie?? format bloku na paragraf (tag P)',
        'formatH1': 'Zamie?? format bloku na H1',
        'formatH2': 'Zamie?? format bloku na H2',
        'formatH3': 'Zamie?? format bloku na H3',
        'formatH4': 'Zamie?? format bloku na H4',
        'formatH5': 'Zamie?? format bloku na H5',
        'formatH6': 'Zamie?? format bloku na H6',
        'insertHorizontalRule': 'Wstaw poziom?? lini??',
        'linkDialog.show': 'Poka?? dialog linkowania'
      },
      history: {
        undo: 'Cofnij',
        redo: 'Pon??w'
      },
      specialChar: {
        specialChar: 'ZNAKI SPECJALNE',
        select: 'Wybierz Znak specjalny'
      }
    }
  });
})(jQuery);
<<<<<<< HEAD

/***/ })

/******/ });
});
=======
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-pl-PL.js.map
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
