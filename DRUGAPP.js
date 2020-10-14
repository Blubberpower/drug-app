// hide credit card info after payment example
//var ass = document.querySelectorAll(".page")[0,1];
//ass.textContent ="lol";


//char * drugs  <--- i dunno wat this is for lol

var isPaid = false;

  

function searchFunction() {
  if (isPaid == false) {
    document.getElementById("drugsearch").disabled = true;
  }

  else{
    document.getElementById("drugsearch").disabled = false;
	}
  }



  function checkinfo() {

    alert("PAYMENT PROCESSED");
    isPaid = true;
    searchFunction();
    var ass = document.querySelectorAll(".page")[0];
    var ass2 = document.querySelectorAll(".cod")[0];
    ass.textContent = "";
    ass2.innerHTML ="<h1>YOUR BILL IS 14 DOLLARS A YEAR. THANKYOU.</h1>";

    }
  
  


    function drugappend() {
      document.getElementById("drugForm").onsubmit = function() {
      var msgElement = document.getElementById("q");
      msgElement.value = msgElement.value + ' drug';
      return true;
      };
    };
  
  





