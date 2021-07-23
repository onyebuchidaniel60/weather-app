/*add event to form to prevent page reload and get input value after submit*/
var getform=document.querySelector("form");
input.addEventListener("submit", function(event){
	event.preventDefault();
	var inputval=input.value;
});
/*using my api key from openweather api here to complete onpenweather url and get data for user's input*/
var apikey="";

var url="";

/*use jquery to perform ajax request*/
