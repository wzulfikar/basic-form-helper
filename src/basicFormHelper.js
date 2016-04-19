(function($) {

  "use strict";

  $.fn.formHelper = function($form) {

    this.reset = function(resetHidden) {
      resetHidden = resetHidden || false;
      if (resetHidden)
        $form.find('[name]').val('').trigger('change');
      else
        $form.find('[type!="hidden"][name]').val('').trigger('change');

      return $form;
    }

    this.set = function(values) {
      var keys = Object.keys(values);
      for (var i = 0; i < keys.length; i++) {
        $form.find('[name="' + keys[i] + '"]').val(values[keys[i]]);
      }

      return $form;
    };
    
    return $form;
  };

}(jQuery));