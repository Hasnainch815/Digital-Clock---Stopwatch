document.addEventListener("DOMContentLoaded", function() {
    const linktoDCButton = document.getElementById("linktoDC");
    const linktoSWButton = document.getElementById("linktoSW");

    if (linktoDCButton) {
        linktoDCButton.addEventListener("click", function() {
            window.location.href = "digitalclock.html";
        });
    }

    if (linktoSWButton) {
        linktoSWButton.addEventListener("click", function() {
            window.location.href = "./stopwatch.html";
        });
    }


    //Digital Clock//
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }

    updateClock();
    setInterval(updateClock, 1000);


    // Stopwatch//


    const swDisplay = document.getElementById("swDisplay");
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isrunning = false;

    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", function() {
        
        if(!isrunning){
            startTime = Date.now() - elapsedTime;
            timer = setInterval(update, 10);
            isrunning = true;
        }
    });
  }
    
  const stopBtn = document.getElementById("stopBtn");
  if (stopBtn) {
      stopBtn.addEventListener("click", function() {
          if(isrunning){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isrunning = false;
          }
      });
  }

  const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
              clearInterval(timer);
              startTime = 0;
              elapsedTime = 0;
              isrunning = false;
              swDisplay.textContent = "00:00:00:00"

        });
    }
  




    function update() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
    
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliSeconds = String(miliSeconds).padStart(2, "0");
    
        swDisplay.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
    }
    




});
