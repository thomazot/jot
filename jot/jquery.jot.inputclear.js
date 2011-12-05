/**
 * jquery.jot.inputclear 
 *
 *     Grava a msg default do campo input
 *
 * @author Thomaz Takashi Oda Toyama <contato@thomazot.com.br>
 * @required 
 *     - jQuery 1.7.1
 *     - jquery.jot 1.0
 * @version 1.0
 */

(function($,undefined) {

    $.fn.inputclear(function ( options ){
        var opt = $.extend({ $.fn.inputclear.defaults, options });
        $(this).each(function() { 
            var $this = $(this), default_value = $this.val();
            if($this.has('[type != "hidden"]')) { 
                $this.focusin(function() {
                    $this.val('');
                });
                $this.focusout(function() {
                    if($.empty($.trim($this.val())) {
                        $this.val(default_value);
                    } 
                });
            }
        });
    }); 

})(jQuery);
