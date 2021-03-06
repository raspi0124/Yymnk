function getCssPropertyForRule(rule, prop) {
        var sheets = document.styleSheets;
        var slen = sheets.length;
        for(var i=0; i<slen; i++) {
            var rules = document.styleSheets[i].cssRules;
            var rlen = rules.length;
            for(var j=0; j<rlen; j++) {
                if(rules[j].selectorText == rule) {
                    return rules[j].style[prop];
                }
            }
        }
    }
( function( $ ) {
  var hover_color;
  wp.customize( 'yymnk_text_color_value', function( value ) {
    value.bind( function( newval ) {
      if(!hover_color){
        hover_color = getCssPropertyForRule('a:hover', 'color');
      }
      if(!newval){
        newval='#000000';
      }
      $( 'body' ).css( 'color',newval );
      $('a').css( 'color',newval );
      $('a').hover(
        function () {
          $(this).css( 'color',hover_color );
        },
        function () {
          $(this).css( 'color',newval );
        }
      );
    } );
  } );
  wp.customize( 'yymnk_hover_color_value', function( value ) {
    value.bind( function( newval ) {
      if(!newval){
        newval='#000000';
      }
      hover_color=newval;
      text_color=$('body').css( 'color');
      $( 'body' ).css( 'color',text_color );
      $('a').css( 'color',text_color );
      $('a').hover(
        function () {
          $(this).css( 'color',newval );
        },
        function () {
          $(this).css( 'color',text_color );
        }
      );
    } );
  } );
  wp.customize( 'yymnk_font_value', function( value ) {
    value.bind( function( newval ) {
      if(!newval){
        newval='serif';
      }
      switch (newval){
        case 'serif':
          $('body').css('font-family','"Times New Roman", "à¾©", YuMincho, "qMm¾© ProN W3", "Hiragino Mincho ProN", "lr o¾©", "MS PMincho",serif');
          break;
        case 'sans-serif':
          $('body').css('font-family','Verdana, Roboto, "Droid Sans", "àSVbN", YuGothic, "CI", Meiryo, "qMmpS ProN W3", "Hiragino Kaku Gothic ProN", "lr oSVbN", sans-serif');
          break;
        case 'cursive':
          $('body').css('font-family','"Comic Sans MS","HGÛºÞ¼¯¸M-PRO","HGMaruGothicMPRO","qMmÛS ProN W4", "Hiragino Maru Gothic ProN","CI", Meiryo,cursive');
          break;
      }
    } );
  } );
} )( jQuery );