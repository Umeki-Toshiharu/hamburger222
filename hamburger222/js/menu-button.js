jQuery( function( $ ) {
 $( ".is-hamburger" ).click( function() {
 $( this ).toggleClass( "is-open" );
 $( ".sidebar" ).toggleClass( "is-open" );
 $( ".new-contents2" ).toggleClass( "is-open" );
 } );
} );

$(function() {
    $(".batsu").click(function(){
    $( this ).toggleClass( "is-open" );
    $(".button-sidebar").toggleClass("is-open");
    $( ".new-contents2" ).toggleClass( "is-open" );
    });
    });