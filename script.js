
 var submission = function() {
   var daysOfTheWeek = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
   
    var maleNames = [ "Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw",  "Kofi", "Kwame"];
    var femaleNames = [  "Akosua",  " Adwoa", "Abenaa",   "Akua",   "Yaa",   "Afua",   "Ama" ];
    
 }
 var month = parseInt(document.getElementById("month").value);
 var year = parseInt(document.getElementById("year").value);
 var day = parseInt(document.getElementById("day").value);
 var name = parseInt(document.getElementById("name").value);
 var date0fbirth = new Date(year + "/" + month + "/" + day);
 var results = date0fbirth.getDay();
 var output = document.getElementById("output");
 var male = document.getElementById("male")
    var female = document.getElementById("female")
    
