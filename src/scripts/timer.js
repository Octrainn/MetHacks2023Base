
const timerDisplay = document.getElementById('timer');


const timer = {

  startTime: 0,

  start: function() {
    
    this.startTime = Date.now();

    setInterval(this.update.bind(this), 1000);
  },

  update: function() {
   
    const elapsedTime = Date.now() - this.startTime;
   
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 1000 / 60);
   
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
};

timer.start();
