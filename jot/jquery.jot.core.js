/**
 * jot extension for jQuery
 *
 * @author Thomaz Takashi Oda Toyama <contato@thomazot.com.br>
 * @required 
 *     - jQuery 1.7.1
 * @version 1.0
 */

(function($) {

    $.jot = $jot || {} 

    if( $.jot.version ) {
        return;
    }
    
    $.extend( $.jot, { 
        version: "@VERSION"
    });
   
})(jQuery);
