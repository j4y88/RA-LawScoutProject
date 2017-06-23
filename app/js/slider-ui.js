export default function ui() {
$( document ).ready(function() {
    $("#slider1").slider({
      value: 0,
        min: 0,
        max: 1000000,
        step: 5000,
        range: "min",
        slide: function(event, ui) {
            update();
        }
    });
    $("#slider2").slider({
      value: 0,
        min: 0,
        max: 1000000,
        step: 5000,
        range: "min",
        slide: function(event, ui) {
            update();
        }
    });
    $("#slider3").slider({
      value: 0,
        min: 0,
        max: 500000,
        step: 1000,
        range: "min",
        slide: function(event, ui) {
            update();
        }
    });
    update();
});

	function update() {
	 let $amount1 = $("#slider1").slider("values", 0);
	 let $amount2 = $("#slider2").slider("values", 0);
	 let $amount3 = $("#slider3").slider("values", 0);
	 let $amount4 = $amount1 + $amount2 + $amount3;
	 $("#amount1").val($amount1);
	 $("#amount2").val($amount2);
	 $("#amount3").val($amount3);
	 $("#amount4").val($amount4);
	 $("#amount5").val($amount4);
	}
};
