export default function ui() {
$( document ).ready(function() {
  $("#slider1").slider({
    value: 100000,
      min: 0,
      max: 1000000,
      step: 5000,
      range: "min",
      slide: function(event, ui) {
          update();
      },
      change: function (event, ui) { update(); }
  });
  $("#slider2").slider({
    value: 5000,
      min: 0,
      max: 1000000,
      step: 5000,
      range: "min",
      slide: function(event, ui) {
          update();
      },
       change: function (event, ui) { update(); }
  });
  $("#slider3").slider({
    value: 3000,
      min: 0,
      max: 20000,
      step: 500,
      range: "min",
      slide: function(event, ui) {
          update();
      },
       change: function (event, ui) { update(); }
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
 let $amount4 = calculateProprietorshipTax($amount1, $amount2).toFixed(2);
 let $amount5 = calculateIncorporationTax($amount1, $amount2, $amount3).toFixed(2);
 let $amount6 = ($amount4 - $amount5).toFixed(0);


 $("#amount1").val("$"+$amount1);
 $("#amount2").val("$"+$amount2);
 $("#amount3").val("$"+$amount3);
 $("#amount4").val("$"+$amount4);
 $("#amount5").val("$"+$amount5);

 if ($amount6.toString().length <= 2){
   $("#savings1").val("");
   $("#savings2").val("");
   $("#savings3").val("");
   $("#savings4").val("");
   $("#savings5").val("");
   $("#savings6").val("");
 }
 if ($amount6.toString().length === 3){
   $("#savings1").val("$");
   $("#savings2").val("");
   $("#savings3").val("");
   $("#savings4").val($amount6.toString().substr(0,1));
   $("#savings5").val($amount6.toString().substr(1,1));
   $("#savings6").val($amount6.toString().substr(2,1));
 }
 if ($amount6.toString().length === 4){
   $("#savings1").val("$");
   $("#savings2").val("");
   $("#savings3").val($amount6.toString().substr(0,1));
   $("#savings4").val($amount6.toString().substr(1,1));
   $("#savings5").val($amount6.toString().substr(2,1));
   $("#savings6").val($amount6.toString().substr(3,1));
 }
 if ($amount6.toString().length === 5){
   $("#savings1").val("$");
   $("#savings2").val($amount6.toString().substr(0,1));
   $("#savings3").val($amount6.toString().substr(1,1));
   $("#savings4").val($amount6.toString().substr(2,1));
   $("#savings5").val($amount6.toString().substr(3,1));
   $("#savings6").val($amount6.toString().substr(4,1));
 }
 if ($amount6.toString().length === 6){
   $("#savings1").val($amount6.toString().substr(0,1));
   $("#savings2").val($amount6.toString().substr(1,1));
   $("#savings3").val($amount6.toString().substr(2,1));
   $("#savings4").val($amount6.toString().substr(3,1));
   $("#savings5").val($amount6.toString().substr(4,1));
   $("#savings6").val($amount6.toString().substr(5,1));
 }


 calculateProprietorshipTax($amount1, $amount2);
 //console.log("incorporation tax" + calculateIncorporationTax($amount1, $amount2, $amount3));
}


function calculateProprietorshipTax(aRev, aExp){
  let aIncome = aRev - aExp;
  //console.log(aIncome);
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
        payableTaxes = cPP + 21382 + (taxableIncome-91831)*.4341;
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

  //console.log("aIncome: "+ aIncome + " cPP: "+ cPP +" taxableIncome:"+ taxableIncome +" payableTaxes: "+payableTaxes);
  return payableTaxes;
}

function calculateIncorporationTax(aRev, aExp, monthlyExpense){
  let ai = aRev - aExp;
  let afterTaxSalary = monthlyExpense * 12;
  let preTaxSalary = 0;
  let cPP = 0
  let ei = 0
  let empEI = 0;
  let corporateTaxes = 0;

  if (afterTaxSalary < 11636) {
    preTaxSalary = afterTaxSalary;
  }else if (afterTaxSalary < 33739.70) {
    preTaxSalary = afterTaxSalary / (1 - 0.2005);
  }else if (afterTaxSalary < 36556.77 ) {
    preTaxSalary =  42201.00 + ((afterTaxSalary - 33739.70) / (1 - 0.2415));
  }else if (afterTaxSalary < 56533.35) {
    preTaxSalary =  45913.68 + ((afterTaxSalary - 36556.77)/ (1 - 0.2965));
  }else if (afterTaxSalary < 63447.02) {
    preTaxSalary =  74308.25 + ((afterTaxSalary - 56533.35)/ (1 - 0.3148));
  }else if (afterTaxSalary < 65532.13) {
    preTaxSalary =  84396.80 + ((afterTaxSalary - 63447.02 )/ (1 - 0.3389));
  }else if (afterTaxSalary < 68184.00) {
    preTaxSalary =  87549.28 + ((afterTaxSalary - 65532.13 )/ (1 - 0.3791));
  }else if (afterTaxSalary < 96773.83) {
    preTaxSalary =  91818.68458 + ((afterTaxSalary - 68184.00 )/ (1 - 0.4341));
  }else if (afterTaxSalary < 100871.32) {
    preTaxSalary =  142337.91 + ((afterTaxSalary - 96773.83 )/ (1 - 0.4641));
  }else if (afterTaxSalary < 128342.64) {
    preTaxSalary =  149982.04 + ((afterTaxSalary  - 100871.32)/ (1 - 0.4797));
  }else if (afterTaxSalary < 136603.32) {
    preTaxSalary =  202779.12 + ((afterTaxSalary  - 128342.64)/ (1 - 0.5191));
  } else if (afterTaxSalary > 136604.33) {
    preTaxSalary =  219976 + ((afterTaxSalary  - 136603.32)/ (1 - 0.5353));
  }
  if (preTaxSalary < 51300 ){
    ei = preTaxSalary * 0.0163
  } else if (preTaxSalary > 51300) {
    ei = 836.19
  }
  if (preTaxSalary - 3500 < 55300 && preTaxSalary - 3500 > 0) {
    cPP = (preTaxSalary - 3500) * .0495
  } else if (preTaxSalary-3500 > 55300) {
    cPP = 2564.10
  }

  let federalDeduction = (11635 + ei + cPP + 1178) * .15;

  let ontarioDeduction = (10171 + ei + cPP) *.0505;

  if(preTaxSalary < 51300){
    empEI = preTaxSalary * .02282;
  } else if (preTaxSalary > 51300) {
    empEI = 1170.67
  }

  let finalPreTaxSalary = preTaxSalary - federalDeduction - ontarioDeduction;

  let corporateTaxableIncome = ai - finalPreTaxSalary - (cPP * 2) - empEI;


  if(corporateTaxableIncome < 500000){
    corporateTaxes = corporateTaxableIncome * 0.15;
  } else if (corporateTaxableIncome > 500000) {
    corporateTaxes = (500000 * 0.15) + ((corporateTaxableIncome - 500000) * .265)
  }

      if(preTaxSalary > ai) {
        return 0;
      }
      //console.log("corporateTaxes:" + corporateTaxes)
      let totalTaxes = corporateTaxes + (finalPreTaxSalary - afterTaxSalary) + ei + empEI + (cPP*2);

  if(totalTaxes < 0){
    totalTaxes = 0
  }

  //console.log("Pre-taxSalary: " + preTaxSalary + "ei: " + ei + "CPP: "+ cPP + "empEI: "+empEI  + "FD: " + federalDeduction + "OD: " + ontarioDeduction);
  //console.log("finalPreTaxSalary: " + finalPreTaxSalary);
  //console.log("corporateTaxableIncome" + corporateTaxableIncome);
  return totalTaxes;

  }
};
