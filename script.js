

var daysOfTheWeek = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var maleNames = [ "Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw",  "Kofi", "Kwame"];
var femaleNames = [  "Akosua",  " Adwoa", "Abenaa",   "Akua",   "Yaa",   "Afua",   "Ama" ];

 function akanDay(){
      var MM = parseInt(document.getElementById("month").value);
      var year = document.getElementById("year").value ;
      var YY= parseInt (year.toString().substring(2,4));
      var CC= parseInt(year.toString().substring(0,2));
      var DD = parseInt(document.getElementById("day").value);
      var dayOfbirth = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7);
     
      alert(dayOfbirth);

}console.log(akanDay());
function people(){
      var genda=document.getElementsByName("gender");
      if (genda[0].checked== true){
        var gender="male";
      }else if(genda[1].checked==true){
        var gender="female";
      }else{
        return false;
      }
      if (gender=="male"){
        if (daybirth==0){
          alert('Your Akan name is '+maleNames[0]);
          
        }else if (daybirth==1){
          alert('Your Akan name is '+maleNames[1]);
          
        }else if (daybirth==2){
          alert('Your Akan name is '+maleNames[2]);
          
        }else if (daybirth==3){
          alert('Your Akan name is '+maleNames[3]);
          
        }else if (daybirth==4){
          alert('Your Akan name is '+maleNames[4]);
          
        }else if (daybirth==5){
          alert('Your Akan name is '+maleNames[5]);
          
        }else if (daybirth==6){
          alert('Your Akan name is '+maleNames[6]);
          
        }
        
      }else if(gender=="female"){
        if (daybirth==0){
          alert('Your Akan name is '+femaleNames[0]);
          
        }else if (daybirth==1){
          alert('Your Akan name is '+femaleNames[1]);
          
        }else if (daybirth==2){
          alert('Your Akan name is '+femaleNames[2]);
          
        }else if (daybirth==3){
          alert('Your Akan name is '+femaleNames[3]);
          
        }else if (daybirth==4){
          alert('Your Akan name is '+femaleNames[4]);
          
        }else if (daybirth==5){
          alert('Your Akan name is '+femaleNames[5]);
          
        }else if (daybirth==6){
          alert('Your Akan name is '+femaleNames[6]);
          
        }

}
  function submission(){
    daybirth=akanDay();
    people();
  }
  
  
}
