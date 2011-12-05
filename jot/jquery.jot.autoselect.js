/**
 * jquery.jot.autoselect Auto Complete form select
 *
 * @author Thomaz Takashi Oda Toyama <contato@thomazot.com.br>
 * @required
 *     - jQuery 1.7.1
 *     - jquery.jot 1.0
 * @version 1.0
 */

(function($,undefined) {

    $.fn.autoselect = function (options) {
        var opt = $.extend($.fn.autoselect.defaults, options);

        $(this).each(function () {
            var $this = $(this);
            // Clear Select
            $this.empty();
            // Populate
            for( value in opt.data) {
                var $option = $.jot.create("option");
                $option.attr({ value: value }).text(opt.data[value]);
            }
        });
    };

    // Option default autoselect
    $.fn.autoselect = {
    
    };

}); 
