var User = User || {};
var Game = Game || {};


require.config({
    paths: {
        // Major libraries
        jquery: 'jquery-1.9.1.min',
        underscore: 'libs/underscore/underscore-min',
        jqueryM: 'libs/jquery.mobile-1.34.0.min'
    }

});

require(
    ['require', 'jquery', 'underscore','collections/DbCollections' ],
    function( require, $, _ ,DbCollections) {
        window.app = window.app || {

            DbCollections:DbCollections
        }
        require(
            ['require', 'jqueryM'],
            function( require ) {

            } );
    } );



