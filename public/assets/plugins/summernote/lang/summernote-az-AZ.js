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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

=======
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
//Summernote WYSIWYG  editor ucun Azerbaycan dili fayli
//Tercume etdi: RAMIL ALIYEV
//Tarix: 20.07.2019
//Baki Azerbaycan
//Website: https://ramilaliyev.com
//Azerbaijan language for Summernote WYSIWYG 
//Translated by: RAMIL ALIYEV
//Date: 20.07.2019
//Baku Azerbaijan
//Website: https://ramilaliyev.com
(function ($) {
  $.extend($.summernote.lang, {
    'az-AZ': {
      font: {
        bold: 'Qal??n',
        italic: '??yri',
        underline: 'Alt?? x??tli',
        clear: 'T??mizl??',
        height: 'S??tir h??nd??rl??y??',
        name: 'Yaz?? Tipi',
        strikethrough: '??st?? x??tli',
        subscript: 'Alt simvol',
        superscript: '??st simvol',
        size: 'Yaz?? ??l????s??'
      },
      image: {
        image: '????kil',
        insert: '????kil ??lav?? et',
        resizeFull: 'Original ??l????',
        resizeHalf: '1/2 ??l????',
        resizeQuarter: '1/4 ??l????',
        floatLeft: 'Sola ????k',
        floatRight: 'Sa??a ????k',
        floatNone: 'Sola-sa??a ????kilm??ni l????v et',
        shapeRounded: '????kil: yuvarlaq k??n??',
        shapeCircle: '????kil: Dair??',
        shapeThumbnail: '????kil: Thumbnail',
        shapeNone: '????kil: Yox',
        dragImageHere: 'Bura s??r????d??r',
        dropImage: '????kil v?? ya m??tni burax??n',
        selectFromFiles: 'S??n??d se??in',
        maximumFileSize: 'Maksimum s??n??d ??l????s??',
        maximumFileSizeError: 'Maksimum s??n??d ??l????s??n?? ke??diniz.',
        url: '????kil linki',
        remove: '????kli sil',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video linki',
        insert: 'Video ??lav?? et',
        url: 'Video linki?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion v?? ya Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Link ??lav?? et',
        unlink: 'Linki sil',
        edit: 'Link?? d??z??li?? et',
        textToDisplay: 'Ekranda g??st??ril??c??k link ad??',
        url: 'Link ??nvan???',
        openInNewWindow: 'Yeni p??nc??r??d?? a??'
      },
      table: {
        table: 'C??dv??l',
        addRowAbove: 'Yuxar?? s??tir ??lav?? et',
        addRowBelow: 'A??a???? s??tir ??lav?? et',
        addColLeft: 'Sola s??tun ??lav?? et',
        addColRight: 'Sa??a s??tun ??lav?? et',
        delRow: 'S??tiri sil',
        delCol: 'S??tunu sil',
        delTable: 'C??dv??li sil'
      },
      hr: {
        insert: '??fuqi x??tt ??lav?? et'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: '??stinad',
        pre: '??n bax????',
        h1: 'Ba??l??q 1',
        h2: 'Ba??l??q 2',
        h3: 'Ba??l??q 3',
        h4: 'Ba??l??q 4',
        h5: 'Ba??l??q 5',
        h6: 'Ba??l??q 6'
      },
      lists: {
        unordered: 'Nizams??z s??ra',
        ordered: 'Nizaml?? s??ra'
      },
      options: {
        help: 'K??m??k',
        fullscreen: 'Tam ekran',
        codeview: 'HTML Kodu'
      },
      paragraph: {
        paragraph: 'Paraqraf',
        outdent: 'Girintini art??r',
        indent: 'Girintini azalt',
        left: 'Sola ????k',
        center: 'Ortaya ????k',
        right: 'Sa??a ????k',
        justify: 'Sola v?? sa??a ????k'
      },
      color: {
        recent: 'Son r??nk',
        more: 'Daha ??ox r??nk',
        background: 'Arxa fon r??ngi',
        foreground: 'Yaz?? r??ngi',
        transparent: '????ffafl??q',
        setTransparent: '????ffafl?????? nizamla',
        reset: 'S??f??rla',
        resetToDefault: 'Susyama g??r?? s??f??rla'
      },
      shortcut: {
        shortcuts: 'Q??sayollar',
        close: 'Ba??la',
        textFormatting: 'Yaz?? formatland??rmaq',
        action: 'Hadis??',
        paragraphFormatting: 'Paraqraf formatland??rmaq',
        documentStyle: 'S??n??d stili',
        extraKeys: '??lav??'
      },
      help: {
        'insertParagraph': 'Paraqraf ??lav?? etm??k',
        'undo': 'Son ??mri geri al??r',
        'redo': 'Son ??mri ir??li al??r',
        'tab': 'Girintini art??r??r',
        'untab': 'Girintini azalt??r',
        'bold': 'Qal??n yazma stilini nizamlay??r',
        'italic': '??talik yazma stilini nizamlay??r',
        'underline': 'Alt?? x??tli yazma stilini nizamlay??r',
        'strikethrough': '??st?? x??tli yazma stilini nizamlay??r',
        'removeFormat': 'Formatland??rman?? l????v edir',
        'justifyLeft': 'Yaz??n?? sola ????kir',
        'justifyCenter': 'Yaz??n?? ortaya ????kir',
        'justifyRight': 'Yaz??n?? sa??a ????kir',
        'justifyFull': 'Yaz??n?? h??r iki t??r??f?? yaz??r',
        'insertUnorderedList': 'Nizams??z s??ra ??lav?? edir',
        'insertOrderedList': 'Nizaml?? s??ra ??lav?? edir',
        'outdent': 'Aktiv paraqraf??n girintisini azalt??r',
        'indent': 'Aktiv paragraf??n girintisini art??r??r',
        'formatPara': 'Aktiv bloqun format??n?? paraqraf (p) olaraq d??yi??dirir',
        'formatH1': 'Aktiv bloqun format??n?? ba??l??q 1 (h1) olaraq d??yi??dirir',
        'formatH2': 'Aktiv bloqun format??n?? ba??l??q 2 (h2) olaraq d??yi??dirir',
        'formatH3': 'Aktiv bloqun format??n?? ba??l??q 3 (h3) olaraq d??yi??dirir',
        'formatH4': 'Aktiv bloqun format??n?? ba??l??q 4 (h4) olaraq d??yi??dirir',
        'formatH5': 'Aktiv bloqun format??n?? ba??l??q 5 (h5) olaraq d??yi??dirir',
        'formatH6': 'Aktiv bloqun format??n?? ba??l??q 6 (h6) olaraq d??yi??dirir',
        'insertHorizontalRule': '??fuqi x??tt ??lav?? edir',
        'linkDialog.show': 'Link parametrl??ri qutusunu g??st??rir'
      },
      history: {
        undo: '??vv??lki v??ziyy??t',
        redo: 'Sonrak?? v??ziyy??t'
      },
      specialChar: {
        specialChar: 'X??susi simvollar',
        select: 'X??susi simvollar?? se??in'
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
//# sourceMappingURL=summernote-az-AZ.js.map
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
