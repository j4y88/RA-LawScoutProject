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
    /*
        ================
        SANITY REFERENCE
        amount1 = Total Annual Revenue
        amount2 = Annual Business Expense
        amount3 = monthly living expense
        amount4 = Proprietorshiptax
        amount5 = incorporation taxes
        ================
    */

	 let $amount1 = $("#slider1").slider("values", 0);
	 let $amount2 = $("#slider2").slider("values", 0);
	 let $amount3 = $("#slider3").slider("values", 0);
	 let $amount4 = '$' + calculateProprietorshipTax($amount1, $amount2).toFixed(2);

	 $("#amount1").val($amount1);
	 $("#amount2").val($amount2);
	 $("#amount3").val($amount3);
	 $("#amount4").val($amount4);
	 $("#amount5").val($amount4);

   calculateProprietorshipTax($amount1, $amount2);
	}


  function calculateProprietorshipTax(aRev, aExp){
    let aIncome = aRev - aExp;
    console.log(aIncome);
    let cPP = 0;
    let payableTaxes = 0;

    if (aIncome-3500 < 55300) {
      cPP = (aIncome-3500) * .099;
      if (cPP < 0) {
        cPP = 0;
      }
    } else if (aIncome-3500 > 55300) {
      cPP = 5128.20;
    }

      let taxableIncome = aIncome - (cPP/2);


        if(taxableIncome < 11635){
            payableTaxes = 0;
        }else if (taxableIncome > 220001) {
          payableTaxes = cPP + 81128 + (taxableIncome-220001)*.5353;
        }else if (taxableIncome > 202800) {
          payableTaxes = cPP + 72189 + (taxableIncome-202800)*.5197;
        }else if (taxableIncome > 150000) {
          payableTaxes = cPP + 46862.11 + (taxableIncome-150000)*.4797;
        }else if (taxableIncome > 142353) {
          payableTaxes = cPP +  43313.61 + (taxableIncome-142353)*.4641;
        }else if (taxableIncome > 91831) {
          payableTaxes = cPP + 21832 + (taxableIncome-91831)*.4341;
        }else if (taxableIncome > 87559) {
          payableTaxes = cPP + 19763.32 + (taxableIncome-87559)*.3791;
        }else if (taxableIncome > 84404) {
          payableTaxes = cPP + 18694.43 + (taxableIncome-84404)*.3389;
        }else if (taxableIncome > 74313) {
          payableTaxes = cPP + 15518 + (taxableIncome-74313)*.3148;
        }else if (taxableIncome > 45916) {
          payableTaxes = cPP + 7098.69 + (taxableIncome-45916)*.2965;
        }else if (taxableIncome > 42201) {
          payableTaxes = cPP + 6201 + (taxableIncome-42201)*.2415;
        }else if (taxableIncome > 19476) {
          payableTaxes = cPP + 1645 + (taxableIncome-19476)*.2005;
        }else if (taxableIncome > 14824) {
          payableTaxes = cPP + 478.2 + (taxableIncome - 14824)*.251
        }else if (taxableIncome > 11635) {
          payableTaxes = 0 + (taxableIncome - 11635)*.15;
        }

    console.log("aIncome: "+ aIncome + " cPP: "+ cPP +" taxableIncome:"+ taxableIncome +" payableTaxes: "+payableTaxes);
    return payableTaxes;
  }

    function calculateIncorporationTax(monthlyExpense){
      let afterTaxSalary = monthlyExpense * 12;
      let preTaxSalary = 0;

      if (afterTaxSalary < 11636) {
        preTaxSalary = afterTaxSalary;
      }


    }
};
