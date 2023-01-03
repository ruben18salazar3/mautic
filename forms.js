jQuery(document).ready(function($) {

    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 13 ? '0000000000000' : '0000000000009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    jQuery('input[type=tel], input[id*="telefone"], input[class*="telefone"]').mask(SPMaskBehavior, spOptions);

});
