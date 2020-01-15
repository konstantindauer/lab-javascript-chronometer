class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId
  }


  startClick() {
   this.intervalId = setInterval(() => {

      this.currentTime +=1;
    }, 1000)
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
      return this.currentTime % 60;      
  }
  
  twoDigitsNumber(time) {
    if (time < 9) {
      return `0${time}`
    }
    else if (time >= 10)
    return time.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {}
}