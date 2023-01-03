jQuery(document).ready(function($) {

    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, 'B').length === 5 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    jQuery('input[type=tel], input[id*="telefone"], input[class*="telefone"]').mask(SPMaskBehavior, spOptions);

});
