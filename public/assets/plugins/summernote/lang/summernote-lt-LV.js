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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ 29:
/***/ (function(module, exports) {

=======
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
(function ($) {
  $.extend($.summernote.lang, {
    'lv-LV': {
      font: {
        bold: 'Treknraksts',
        italic: 'Kurs??vs',
        underline: 'Pasv??trots',
        clear: 'No??emt format??jumu',
        height: 'L??nijas augstums',
        name: 'Fonts',
        strikethrough: 'Nosv??trots',
        superscript: 'Aug??raksts',
        subscript: 'Apak??raksts',
        size: 'Fonta lielums'
      },
      image: {
        image: 'Att??ls',
        insert: 'Ievietot att??lu',
        resizeFull: 'Pilns izm??rts',
        resizeHalf: 'Samazin??t 50%',
        resizeQuarter: 'Samazin??t 25%',
        floatLeft: 'L??dzin??t pa kreisi',
        floatRight: 'L??dzin??t pa labi',
        floatNone: 'Nel??dzin??t',
        shapeRounded: 'Forma: apa????m mal??m',
        shapeCircle: 'Forma: aplis',
        shapeThumbnail: 'Forma: r??m??tis',
        shapeNone: 'Forma: or??in??la',
        dragImageHere: 'Iev??lciet att??lu ??eit',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Izv??l??ties failu',
        maximumFileSize: 'Maksim??lais faila izm??rs',
        maximumFileSizeError: 'Faila izm??rs p??r??k liels!',
        url: 'Att??la URL',
        remove: 'Dz??st att??lu',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video Link',
        insert: 'Insert Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Saite',
        insert: 'Ievietot saiti',
        unlink: 'No??emt saiti',
        edit: 'Redi????t',
        textToDisplay: 'Saites saturs',
        url: 'Koks URL adresas yra susietas?',
        openInNewWindow: 'Atv??rt jaun?? log??'
      },
      table: {
        table: 'Tabula',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Ievietot l??niju'
      },
      style: {
        style: 'Stils',
        p: 'Parasts',
        blockquote: 'Cit??ts',
        pre: 'Kods',
        h1: 'Virsraksts h1',
        h2: 'Virsraksts h2',
        h3: 'Virsraksts h3',
        h4: 'Virsraksts h4',
        h5: 'Virsraksts h5',
        h6: 'Virsraksts h6'
      },
      lists: {
        unordered: 'Nenumur??ts saraksts',
        ordered: 'Numur??ts saraksts'
      },
      options: {
        help: 'Pal??dz??ba',
        fullscreen: 'Pa visu ekr??nu',
        codeview: 'HTML kods'
      },
      paragraph: {
        paragraph: 'Paragr??fs',
        outdent: 'Samazin??t atk??pi',
        indent: 'Palielin??t atk??pi',
        left: 'L??dzin??t pa kreisi',
        center: 'Centr??t',
        right: 'L??dzin??t pa labi',
        justify: 'L??dzin??t gar ab??m mal??m'
      },
      color: {
        recent: 'Nesen izmantot??s',
        more: 'Citas kr??sas',
        background: 'Fona kr??sa',
        foreground: 'Fonta kr??sa',
        transparent: 'Caursp??d??gs',
        setTransparent: 'Iestat??t caursp??d??gumu',
        reset: 'Atjaunot',
        resetToDefault: 'Atjaunot noklus??jumu'
      },
      shortcut: {
        shortcuts: 'Sa??snes',
        close: 'Aizv??rt',
        textFormatting: 'Teksta format????ana',
        action: 'Darb??ba',
        paragraphFormatting: 'Paragr??fa format????ana',
        documentStyle: 'Dokumenta stils',
        extraKeys: 'Citas tausti??u kombin??cijas'
      },
      help: {
        insertParagraph: 'Ievietot Paragr??fu',
        undo: 'Atcelt iepriek????jo darb??bu',
        redo: 'Atk??rtot atcelto darb??bu',
        tab: 'Atk??pe',
        untab: 'Samazin??t atk??pi',
        bold: 'P??rv??rst tekstu treknrakst??',
        italic: 'P??rv??rst tekstu sl??prakst?? (kurs??v??)',
        underline: 'Pasv??trot tekstu',
        strikethrough: 'Nosv??trot tekstu',
        removeFormat: 'Not??r??t stilu no teksta',
        justifyLeft: 'L??dz??n??t saturu pa kreisi',
        justifyCenter: 'Centr??t saturu',
        justifyRight: 'L??dz??n??t saturu pa labi',
        justifyFull: 'Izl??dzin??t saturu gar ab??m mal??m',
        insertUnorderedList: 'Ievietot nenumur??tu sarakstu',
        insertOrderedList: 'Ievietot numur??tu sarakstu',
        outdent: 'Samazin??t/no??emt atk??pi paragr??fam',
        indent: 'Uzlikt atk??pi paragr??fam',
        formatPara: 'Main??t bloka tipu uz (p) Paragr??fu',
        formatH1: 'Main??t bloka tipu uz virsrakstu H1',
        formatH2: 'Main??t bloka tipu uz virsrakstu H2',
        formatH3: 'Main??t bloka tipu uz virsrakstu H3',
        formatH4: 'Main??t bloka tipu uz virsrakstu H4',
        formatH5: 'Main??t bloka tipu uz virsrakstu H5',
        formatH6: 'Main??t bloka tipu uz virsrakstu H6',
        insertHorizontalRule: 'Ievietot horizont??lu l??niju',
        'linkDialog.show': 'Par??d??t saites logu'
      },
      history: {
        undo: 'Atsauks (undo)',
        redo: 'Atk??rtot (redo)'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
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
//# sourceMappingURL=summernote-lt-LV.js.map
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
