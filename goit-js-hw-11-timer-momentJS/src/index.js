/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
import './styles.css';
import moment from 'moment';

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const awaitingdate = this.targetDate;
    this.TimerId = setInterval(() => {
      const currentTime = moment().unix();

      this.deltaTime = awaitingdate - currentTime;
      if (!this.deltaTime === 0 || this.deltaTime < 0) {
        clearInterval(this.TimerId);
        this.deltaTime = 0;
        alert('The date has come!');
      }
      this.updateClockFace = this.deltaTime;
    }, 1000);
  }

  set updateClockFace(time) {
    const days = String(Math.floor(time / (60 * 60 * 24))).padStart(2, '0');
    const hours = String(
      Math.floor((time % (60 * 60 * 24)) / (60 * 60)),
    ).padStart(2, '0');
    const mins = String(Math.floor((time % (60 * 60)) / 60)).padStart(2, '0');
    const secs = String(Math.floor(time % 60)).padStart(2, '0');

    this.newTime = {
      days,
      hours,
      mins,
      secs,
    };
  }

  set newTime({
 days, hours, mins, secs 
}) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
}

const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: moment('2020-01-17').unix(),
});

counterDown.start();
