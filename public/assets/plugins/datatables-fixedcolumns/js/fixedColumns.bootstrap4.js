<<<<<<< HEAD
/*! Bootstrap 4 styling wrapper for FixedColumns
 * ©2018 SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-bs4', 'datatables.net-fixedcolumns'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net-bs4')(root, $).$;
			}

			if ( ! $.fn.dataTable.FixedColumns ) {
				require('datatables.net-fixedcolumns')(root, $);
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {

return $.fn.dataTable;

}));
=======
/*! FixedColumns 4.0.1
 * 2019-2021 SpryMedia Ltd - datatables.net/license
 */
(function () {
    'use strict';

    /*! Bootstrap 4 integration for DataTables' FixedColumns
     * ©2016 SpryMedia Ltd - datatables.net/license
     */
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery', 'datatables.net-bs4', 'datatables.net-fixedcolumns'], function ($) {
                return factory($);
            });
        }
        else if (typeof exports === 'object') {
            // CommonJS
            module.exports = function (root, $) {
                if (!root) {
                    root = window;
                }
                if (!$ || !$.fn.dataTable) {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    $ = require('datatables.net-bs4')(root, $).$;
                }
                if (!$.fn.dataTable.SearchPanes) {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    require('datatables.net-fixedcolumns')(root, $);
                }
                return factory($);
            };
        }
        else {
            // Browser
            factory(jQuery);
        }
    }(function ($) {
        var dataTable = $.fn.dataTable;
        return dataTable.fixedColumns;
    }));

}());
>>>>>>> 0ce188163fce53630bc925de21159b83883b574e
