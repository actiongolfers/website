var actiongolf = {
    init: function () {
        var numberPreviousValue = 0;
        $("input[type=number]").on('change keyup', function(event) {
            var _this = $(this),
                maxLength = _this.attr('maxlength'),
                value = _this.val();

            if (value < 0) {
                _this.val(0);
                value = 0;
            }

            if (value > 100 && maxLength == 3) {
                _this.val(numberPreviousValue);
                value = numberPreviousValue;
            }

            if (value.length > maxLength) {
                if (value > 99 && maxLength == 2) {
                    _this.val(numberPreviousValue);
                    value = numberPreviousValue;
                } else {
                    _this.val(value.slice(0, maxLength));
                }
            }

            numberPreviousValue = value;
        });

        $( "#startdatepicker" ).datepicker({
            inline: true,
            minDate : 0,
            defaultDate: new Date(),
        });

        $( "#enddatepicker" ).datepicker({
            inline: true,
            minDate : 0,
            defaultDate: new Date()
        });

        $( "#startdatepicker" ).datepicker('setDate', new Date());
        $( "#enddatepicker" ).datepicker('setDate', new Date());
    }
};

actiongolf.init();
