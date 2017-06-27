		window.onload = function () {
		    myFunction();
		};

		function myFunction() {
		    setInterval(function () { displayDate(); setDate(); }, 1000);
		       
		   
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

      const secondHand = document.querySelector('.second-hand');
      const minuteHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      
            function setDate() {                                        
                const now = new Date();
                
                const seconds = now.getSeconds();
                const minutes = now.getMinutes();
                const hours = now.getHours();
                
                var secondsDegrees = ((seconds / 60) * 360) + 90;
                var minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
                var hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
                
                secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
                minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
                hourHand.style.transform = `rotate(${hoursDegrees}deg) scale(0.85)`;
                
                }

            
//set date function gets a new date and sets it equal to now
//seconds is set equal to now.getSeconds(); which is just the holder for the date new date function the seconds are constantly updated every second
//since seconds equals the current seconds when it's divided by 60 and multipled by 360 it gets the degrees that corresponds to the correct spot it should be located on a clock
//the + 90 at the end is to offset the fact that it starts at left to right but it needs to start from going top to bottom to make it appear like a clock.
//secondHand.style.transform lets you change the style of the secondhand by adding a css transform attribute that rotates the secondHand.
      
      

      
function name() {     }