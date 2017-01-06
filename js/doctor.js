function Doctor(medicalIssue) {
  this.medicalIssue = medicalIssue;
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  var _this = this.medicalIssue;

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result){
     _this = this.result;
     return (_this);
      // console.log(result);
    }).fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;



// exports.getDoctors = function(medicalIssue) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };
