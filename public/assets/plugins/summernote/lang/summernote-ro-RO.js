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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports) {

=======
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
(function ($) {
  $.extend($.summernote.lang, {
    'ro-RO': {
      font: {
        bold: '??ngro??at',
        italic: '??nclinat',
        underline: 'Subliniat',
        clear: '??nl??tur?? formatare font',
        height: '??n??l??ime r??nd',
        name: 'Familie de fonturi',
        strikethrough: 'T??iat',
        subscript: 'Indice',
        superscript: 'Exponent',
        size: 'Dimensiune font'
      },
      image: {
        image: 'Imagine',
        insert: 'Insereaz?? imagine',
        resizeFull: 'Redimensioneaz?? complet',
        resizeHalf: 'Redimensioneaz?? 1/2',
        resizeQuarter: 'Redimensioneaz?? 1/4',
        floatLeft: 'Aliniere la st??nga',
        floatRight: 'Aliniere la dreapta',
        floatNone: 'Far?? aliniere',
        shapeRounded: 'Form??: Rotund',
        shapeCircle: 'Form??: Cerc',
        shapeThumbnail: 'Form??: Pictogram??',
        shapeNone: 'Form??: Nici una',
        dragImageHere: 'Trage o imagine sau un text aici',
        dropImage: 'Elibereaz?? imaginea sau textul',
        selectFromFiles: 'Alege din fi??iere',
        maximumFileSize: 'Dimensiune maxim?? fi??ier',
        maximumFileSizeError: 'Dimensiune maxim?? fi??ier dep????it??.',
        url: 'URL imagine',
        remove: '??terge imagine',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Link video',
        insert: 'Insereaz?? video',
        url: 'URL video?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion sau Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Insereaz?? link',
        unlink: '??nl??tur?? link',
        edit: 'Editeaz??',
        textToDisplay: 'Text ce va fi afi??at',
        url: 'La ce adres?? URL trebuie s?? conduc?? acest link?',
        openInNewWindow: 'Deschidere ??n fereastr?? nou??'
      },
      table: {
        table: 'Tabel',
        addRowAbove: 'Adaug?? r??nd deasupra',
        addRowBelow: 'Adaug?? r??nd dedesubt',
        addColLeft: 'Adaug?? coloan?? st??nga',
        addColRight: 'Adaug?? coloan?? dreapta',
        delRow: '??terge r??nd',
        delCol: '??terge coloan??',
        delTable: '??terge tabel'
      },
      hr: {
        insert: 'Insereaz?? o linie orizontal??'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: 'Citat',
        pre: 'Preformatat',
        h1: 'Titlu 1',
        h2: 'Titlu 2',
        h3: 'Titlu 3',
        h4: 'Titlu 4',
        h5: 'Titlu 5',
        h6: 'Titlu 6'
      },
      lists: {
        unordered: 'List?? neordonat??',
        ordered: 'List?? ordonat??'
      },
      options: {
        help: 'Ajutor',
        fullscreen: 'M??re??te',
        codeview: 'Surs??'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Cre??te identarea',
        indent: 'Scade identarea',
        left: 'Aliniere la st??nga',
        center: 'Aliniere central??',
        right: 'Aliniere la dreapta',
        justify: 'Aliniere ??n bloc'
      },
      color: {
        recent: 'Culoare recent??',
        more: 'Mai multe  culori',
        background: 'Culoarea fundalului',
        foreground: 'Culoarea textului',
        transparent: 'Transparent',
        setTransparent: 'Seteaz?? transparent',
        reset: 'Reseteaz??',
        resetToDefault: 'Revino la ini??ial'
      },
      shortcut: {
        shortcuts: 'Scurt??turi tastatur??',
        close: '??nchide',
        textFormatting: 'Formatare text',
        action: 'Ac??iuni',
        paragraphFormatting: 'Formatare paragraf',
        documentStyle: 'Stil paragraf',
        extraKeys: 'Taste extra'
      },
      help: {
        'insertParagraph': 'Insereaz?? paragraf',
        'undo': 'Revine la starea anterioar??',
        'redo': 'Revine la starea ulterioar??',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Seteaz?? stil ??ngro??at',
        'italic': 'Seteaz?? stil ??nclinat',
        'underline': 'Seteaz?? stil subliniat',
        'strikethrough': 'Seteaz?? stil t??iat',
        'removeFormat': '??nl??tur?? formatare',
        'justifyLeft': 'Seteaz?? aliniere st??nga',
        'justifyCenter': 'Seteaz?? aliniere centru',
        'justifyRight': 'Seteaz?? aliniere dreapta',
        'justifyFull': 'Seteaz?? aliniere bloc',
        'insertUnorderedList': 'Comutare list?? neordinat??',
        'insertOrderedList': 'Comutare list?? ordonat??',
        'outdent': '??nl??tur?? indentare paragraf curent',
        'indent': 'Adaug?? indentare paragraf curent',
        'formatPara': 'Schimb?? formatarea selec??iei ??n paragraf',
        'formatH1': 'Schimb?? formatarea selec??iei ??n H1',
        'formatH2': 'Schimb?? formatarea selec??iei ??n H2',
        'formatH3': 'Schimb?? formatarea selec??iei ??n H3',
        'formatH4': 'Schimb?? formatarea selec??iei ??n H4',
        'formatH5': 'Schimb?? formatarea selec??iei ??n H5',
        'formatH6': 'Schimb?? formatarea selec??iei ??n H6',
        'insertHorizontalRule': 'Adaug?? linie orizontal??',
        'linkDialog.show': 'Insereaz?? link'
      },
      history: {
        undo: 'Starea anterioar??',
        redo: 'Starea ulterioar??'
      },
      specialChar: {
        specialChar: 'CARACTERE SPECIALE',
        select: 'Alege caractere speciale'
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
//# sourceMappingURL=summernote-ro-RO.js.map
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
