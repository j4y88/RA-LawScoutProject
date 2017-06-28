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
    //clear session:
    session.clear();
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
    this.sendForm(myJsonString);
  }

  sendForm(form){
    console.log(form);
    console.log("FORM SENT");
    $.ajax({
      url: "google.com",
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
