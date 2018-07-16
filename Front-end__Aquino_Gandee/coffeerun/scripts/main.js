(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var STRENGHT_VAL_SELECTOR ='#strengthLevel';
    var STRENGHT_VAL_SHOW = '#strengthShow';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('Base', new DataStore());
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

    $(STRENGHT_VAL_SELECTOR).on('input', function() {
        var strengthVal = $(this).val();
        $(STRENGHT_VAL_SHOW).html(strengthVal);
        if(strengthVal < 45) {
            $('[data-strength-val]').attr('data-strength-val', 'lite');
        } else if (strengthVal < 75) {
            $('[data-strength-val]').attr('data-strength-val', 'medium');
        } else {
            $('[data-strength-val]').attr('data-strength-val', 'strength');
        }
    });

})(window);