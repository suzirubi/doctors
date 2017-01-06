var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

//global variables

var myDoctor = new Doctor(medicalIssue);

$(document).ready(function() {
  $("form.doctor").submit(function(event){
    event.preventDefault();
    var _this = $("input#issue").val();
    var response = myDino.getDinos(displayDinos);
    console.log(response);
  });
  this.medicalIssue = _this;
});
