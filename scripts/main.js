		
	window.onload = function() {
							displayDate();
							myFunction();
								};
	function myFunction() {
					//	var framesPerSecond = 30; framesPerSecond);
				setInterval(function(){
				displayDate();
									}, 1000);
				}
				
	function displayDate(date) {
	var date = new Date();
	var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	var am_pm = date.getHours() >= 12 ? "PM" : "AM";
	hours = hours < 10 ? "0" + hours : hours;
	var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
		document.getElementById("demo2").innerHTML = time;
		var d = new Date();
			document.getElementById("demo1").innerHTML = d.toDateString();
			}


			
