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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

=======
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
(function ($) {
  $.extend($.summernote.lang, {
    'cs-CZ': {
      font: {
        bold: 'Tu??n??',
        italic: 'Kurz??va',
        underline: 'Podtr??en??',
        clear: 'Odstranit styl p??sma',
        height: 'V????ka ????dku',
        strikethrough: 'P??e??krtnut??',
        size: 'Velikost p??sma'
      },
      image: {
        image: 'Obr??zek',
        insert: 'Vlo??it obr??zek',
        resizeFull: 'P??vodn?? velikost',
        resizeHalf: 'Polovi??n?? velikost',
        resizeQuarter: '??tvrte??n?? velikost',
        floatLeft: 'Um??stit doleva',
        floatRight: 'Um??stit doprava',
        floatNone: 'Neobt??kat textem',
<<<<<<< HEAD
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'P??et??hnout sem obr??zek',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Vybrat soubor',
        url: 'URL obr??zku',
        remove: 'Remove Image',
        original: 'Original'
=======
        shapeRounded: 'Tvar: zaoblen??',
        shapeCircle: 'Tvar: kruh',
        shapeThumbnail: 'Tvar: n??hled',
        shapeNone: 'Tvar: ????dn??',
        dragImageHere: 'P??et??hnout sem obr??zek',
        dropImage: 'P??et??hnout obr??zek nebo text',
        selectFromFiles: 'Vybrat soubor',
        url: 'URL obr??zku',
        remove: 'Odebrat obr??zek',
        original: 'Origin??l'
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
      },
      video: {
        video: 'Video',
        videoLink: 'Odkaz videa',
        insert: 'Vlo??it video',
        url: 'URL videa?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)'
      },
      link: {
        link: 'Odkaz',
        insert: 'Vytvo??it odkaz',
        unlink: 'Zru??it odkaz',
        edit: 'Upravit',
        textToDisplay: 'Zobrazovan?? text',
        url: 'Na jak?? URL m?? tento odkaz v??st?',
        openInNewWindow: 'Otev????t v nov??m okn??'
      },
      table: {
        table: 'Tabulka',
<<<<<<< HEAD
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
=======
        addRowAbove: 'P??idat ????dek nad',
        addRowBelow: 'P??idat ????dek pod',
        addColLeft: 'P??idat sloupec vlevo',
        addColRight: 'P??idat sloupec vpravo',
        delRow: 'Smazat ????dek',
        delCol: 'Smazat sloupec',
        delTable: 'Smazat tabulku'
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
      },
      hr: {
        insert: 'Vlo??it vodorovnou ????ru'
      },
      style: {
        style: 'Styl',
        p: 'Norm??ln??',
        blockquote: 'Citace',
        pre: 'K??d',
        h1: 'Nadpis 1',
        h2: 'Nadpis 2',
        h3: 'Nadpis 3',
        h4: 'Nadpis 4',
        h5: 'Nadpis 5',
        h6: 'Nadpis 6'
      },
      lists: {
        unordered: 'Odr????kov?? seznam',
        ordered: '????seln?? seznam'
      },
      options: {
        help: 'N??pov??da',
        fullscreen: 'Cel?? obrazovka',
        codeview: 'HTML k??d'
      },
      paragraph: {
        paragraph: 'Odstavec',
        outdent: 'Zv??t??it odsazen??',
        indent: 'Zmen??it odsazen??',
        left: 'Zarovnat doleva',
        center: 'Zarovnat na st??ed',
        right: 'Zarovnat doprava',
        justify: 'Zarovnat oboustrann??'
      },
      color: {
        recent: 'Aktu??ln?? barva',
        more: 'Dal???? barvy',
        background: 'Barva pozad??',
        foreground: 'Barva p??sma',
        transparent: 'Pr??hlednost',
        setTransparent: 'Nastavit pr??hlednost',
        reset: 'Obnovit',
        resetToDefault: 'Obnovit v??choz??',
        cpSelect: 'Vybrat'
      },
      shortcut: {
        shortcuts: 'Kl??vesov?? zkratky',
        close: 'Zav????t',
        textFormatting: 'Form??tov??n?? textu',
        action: 'Akce',
        paragraphFormatting: 'Form??tov??n?? odstavce',
        documentStyle: 'Styl dokumentu'
      },
      help: {
<<<<<<< HEAD
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
=======
        'insertParagraph': 'Vlo??it odstavec',
        'undo': 'Vr??tit posledn?? p????kaz',
        'redo': 'Opakovat posledn?? p????kaz',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Nastavit tu??n??',
        'italic': 'Nastavit kurz??vu',
        'underline': 'Nastavit podtrhnut??',
        'strikethrough': 'Nastavit p??e??krtnut??',
        'removeFormat': 'Ostranit nastaven?? styl',
        'justifyLeft': 'Nastavit zarovn??n?? vlevo',
        'justifyCenter': 'Nastavit zarovn??n?? na st??ed',
        'justifyRight': 'Nastavit zarovn??n?? vpravo',
        'justifyFull': 'Nastavit zarovn??n?? do bloku',
        'insertUnorderedList': 'Aplikovat odr????kov?? seznam',
        'insertOrderedList': 'Aplikovat ????seln?? seznam',
        'outdent': 'Zmen??it odsazen?? aktu??ln??ho odstavec',
        'indent': 'Odsadit aktu??ln?? odstavec',
        'formatPara': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na odstavec (P tag)',
        'formatH1': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na Nadpis 1',
        'formatH2': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na Nadpis 2',
        'formatH3': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na Nadpis 3',
        'formatH4': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na Nadpis 4',
        'formatH5': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na Nadpis 5',
        'formatH6': 'Zm??nit form??tov??n?? aktu??ln??ho bloku na Nadpis 6',
        'insertHorizontalRule': 'Vlo??it horizont??ln?? ????ru',
        'linkDialog.show': 'Zobrazit dialog pro odkaz'
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
      },
      history: {
        undo: 'Krok vzad',
        redo: 'Krok vp??ed'
      },
      specialChar: {
<<<<<<< HEAD
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
=======
        specialChar: 'SPECI??LN?? ZNAKY',
        select: 'Vyberte speci??ln?? znaky'
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
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
//# sourceMappingURL=summernote-cs-CZ.js.map
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
