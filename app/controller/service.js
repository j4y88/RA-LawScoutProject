import FormModel from '../model/formmodel';
export default class Service{
  constructor(){}

  compileData(storage){
    let session = storage.ss;
    let sessionArray = [];
    for (let key in window.sessionStorage){
      if (session.hasOwnProperty(key)) {
        sessionArray[key] = {name: key, value: session[key]};
      }
    }
    this.makeObject(sessionArray);
  }

  makeObject(ssArray){
    let editedArrayObject = {};
    for (let key in ssArray){
        editedArrayObject[key] = ssArray[key].value;
    }
    this.makeFormModel(editedArrayObject);
  }
  makeFormModel(object){
    let liabilityScore = 0;
    let model = new FormModel();
    model.revenue = object.amount1;
    model.businessExpense = object.amount2;
    model.livingExpense = object.amount3;
    model.proprietorship = object.amount4;
    model.incorporation = object.amount5;
    model.savings = model.proprietorship - model.incorporation;
    model.industry = object.industry;
    switch (model.industry){
      case "Construction": liabilityScore += 50; break;
      case "Educational Services": liabilityScore += 25; break;
      case "Finance and Insurance": liabilityScore += 25; break;
      case "Food Services": liabilityScore += 50; break;
      case "Health Care": liabilityScore += 50; break;
      case "Manufacturing": liabilityScore += 25; break;
      default: liabilityScore += 0; break;
    }
    if (object.radio1Yes == "selected"){
      model.holdsProperty = "Yes";
      liabilityScore += 30;
    }
    else{
      model.holdsProperty = "No";
    }
    if (object.radio2Yes == "selected"){
      model.holdsInformation = "Yes" ;
      liabilityScore += 30;
    }
    else{
      model.holdsInformation = "No";
    }
    if (object.radio3Yes == "selected"){
      model.operatesProperty = "Yes" ;
      liabilityScore += 20;
    }
    else{
      model.operatesProperty = "No";
    }
    if (object.radio4Yes == "selected"){
      model.hasSubcontractors = "Yes" ;
      liabilityScore += 5;
    }
    else{
      model.hasSubcontractors = "No";
    }
    if (object.radio5Yes == "selected"){
      model.hasEmployees = "Yes" ;
      liabilityScore += 5;
    }
    else{
      model.hasEmployees = "No";
    }
    if (object.radio6Yes == "selected"){
      model.consumerProducts = "Yes" ;
      liabilityScore += 20;
    }
    else{
      model.consumerProducts = "No";
    }
    model.name = object.emailName;
    model.email= object.emailAddress;
    model.liabilityScore= liabilityScore;
    this.makeJSONObject(model);
  }

  makeJSONObject(model){
    let myJsonString = {};
    myJsonString = JSON.stringify(model);
    //call function to send ajax/XHR:
    this.sendForm(model);
  }

  sendForm(form){
    console.log(form);
    console.log("FORM SENT");
    let baseurl ="https://facebook.us16.list-manage.com/subscribe/post?u=e6d0b1c96cefea3b6aa8267e2&amp;id=c1997644bd"
    baseurl += "&NAME=" + form.name.replace(/\s+/g, '') + "&EMAIL=" + form.email + "&SAVINGS=" + form.savings.toFixed(0) +"&AEXPENSE=" + form.businessExpense + "&INDUSTRY=" + form.industry.replace(/\s+/g, '') + "&RISK=" + form.liabilityScore + "&AINCOME=" + form.revenue + "&MEXPENSE=" + form.livingExpense;
    baseurl += "&Q1=" + form.holdsProperty  + "&Q2=" + form.holdsInformation + "&Q3=" + form.operatesProperty + "&Q4=" + form.hasSubcontractors + "&Q5=" + form.hasEmployees + "&Q6=" + form.consumerProducts
    console.log(baseurl);
    $.ajax({
      url: "https://facebook.us16.list-manage.com/subscribe/post?u=e6d0b1c96cefea3b6aa8267e2&amp;id=c1997644bd&AINCOME=555000&AEXPENSE=200000&MEXPENSE=15000&SAVINGS=40000&INDUSTRY=Farmer&RISK=50&NAME=JasonNg&EMAIL=j.pilapil@hotmail@hotmail.com&Q1=Yes&Q2=No&Q3=No&Q4=Yes&Q5=No&Q6=Yes",
      method: 'POST',
    })
    .done(function() {

      //go to next slide

    }).fail(function(err) {
      //show user that there is an error
      throw err;
    });
  }

}
