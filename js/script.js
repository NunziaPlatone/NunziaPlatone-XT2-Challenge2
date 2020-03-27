        function setTime(){

            let date = new Date();
            // +1 for clocking time issue
            date.setSeconds(date.getSeconds() + 1);
            // date.setHours(18);
            let formattedTime = (date.getHours()<10?'0':'') + date.getHours()     + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes() + ':' +  (date.getSeconds() <10?'0':'') + date.getSeconds()   ;
            let clockcontainer = document.getElementById('clockContainer')
            let clock = document.getElementById('clock')
            clock.innerHTML = formattedTime;    
            clockcontainer.classList.remove("blue");
            if(date.getHours() >= 8 && date.getHours() <= 11){
                //pink
                document.getElementById('tijdstipText').innerHTML = 'Goedemorgen !!!';
            }else if(date.getHours() >= 12 && date.getHours() <= 17){
                document.getElementById('tijdstipText').innerHTML  = 'Goedemiddag  !!!';
                //green
            }else{
                document.getElementById('tijdstipText').innerHTML  = 'Goedenavond !!!';
                //blue
            }
        }
        document.getElementById("clockContainer").style.background= '#'+Math.floor(Math.random()*16777215).toString(16)
        setInterval(function () { 
          document.getElementById("clockContainer").style.background= '#'+Math.floor(Math.random()*16777215).toString(16)
        }, 2500);
        setInterval(setTime,1000);