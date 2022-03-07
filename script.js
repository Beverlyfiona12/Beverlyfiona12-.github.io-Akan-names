

var daysOfTheWeek = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var maleNames = [ "Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw",  "Kofi", "Kwame"];
var femaleNames = [  "Akosua",  " Adwoa", "Abenaa",   "Akua",   "Yaa",   "Afua",   "Ama" ];

 function akanDay(){
      var MM = parseInt(document.getElementById("month").value);
      var year = document.getElementById("year").value ;
      var YY= parseInt (year.toString().substring(2,4));
      var CC= parseInt(year.toString().substring(0,2));
      var DD = parseInt(document.getElementById("day").value);
      var name =document.getElementById("name").value;
      var day0fbirth = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7);
     
      return(day0fbirth);

}
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
        if (day0fbirth==0){
          alert('Your Akan name is '+maleNames[0]);
          
        }else if (day0fbirth==1){
          alert('Your Akan name is '+maleNames[1]);
          
        }else if (day0fbirth==2){
          alert('Your Akan name is '+maleNames[2]);
          
        }else if (day0fbirth==3){
          alert('Your Akan name is '+maleNames[3]);
          
        }else if (day0fbirth==4){
          alert('Your Akan name is '+maleNames[4]);
          
        }else if (day0fbirth==5){
          alert('Your Akan name is '+maleNames[5]);
          
        }else if (day0fbirth==6){
          alert('Your Akan name is '+maleNames[6]);
          
        }
        
      }
      var genda=document.getElementsByName("gender");
      if (genda[0].checked== true){
        var gender="male";
      }else if(genda[1].checked==true){
        var gender="female";
      }else{
        return false;
      }
      if (gender=="female"){
        if (day0fbirth==0){
          alert('Your Akan name is '+femaleNames[0]);
          
        }else if (day0fbirth==1){
          alert('Your Akan name is '+femaleNames[1]);
          
        }else if (day0fbirth==2){
          alert('Your Akan name is '+femaleNames[2]);
          
        }else if (day0fbirth==3){
          alert('Your Akan name is '+femaleNames[3]);
          
        }else if (day0fbirth==4){
          alert('Your Akan name is '+femaleNames[4]);
          
        }else if (day0fbirth==5){
          alert('Your Akan name is '+femaleNames[5]);
          
        }else if (day0fbirth==6){
          alert('Your Akan name is '+femaleNames[6]);
          
        }

}

    function submission() {
    if (month =="" && year =="" && day =="" && name=="") {
      alert("Please Enter you credentials");
      return false;
    }
  
    if (month == null || month== "", day == null || day == "", year== null || year == "", name == null || name == "") {
      alert("Please Fill All Required Field");
      return false;
    }
    if (year < 0) {
      output.style.background ="red"
      output.style.color= "white"
      
  }
    
  else if ((month < 1) || (month > 31)) {
      output.style.background ="red"
      output.style.color= "white"
      output.innerHTML = "Hey! " + name + " please enter a valid month! "
  }
    
   else if (day < 0 || day > 31) {
      output.style.background ="red"
      output.style.color= "white"
      output.innerHTML = "Hey! " + name + " please enter a valid day! "
  }
   var valid = (year>0 && (month > 0 && month < 12) (day > 0 && day <32))
   
   if(valid == false){
     alert("No Input received!!");
   }
  
    if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="lime"
        output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
    }
     else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
      output.style.background ="lime"
      output.style.background ="red"
      output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
     }
  
}


     
  
}
