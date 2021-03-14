import { Component } from '@angular/core';


const generateNumArr = (end = 0) => {
  const res = []
  for (let i = 0; i < end; i++) {
    res.push(i)
  }
  return res
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  hrsDrift: number = 0;
  minsDrift: number = 0;

  hoursList: number[] = generateNumArr(24);
  minsList: number[] = generateNumArr(60);

  custom = {
    hrs: 0,
    mins: 0,
  }

  ngAfterViewInit() {
    this.timerId = this.getTime();
  }
  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours() - this.hrsDrift;
      this.minute = this.date.getMinutes() - this.minsDrift;
      this.second = this.date.getSeconds();
    }, 1000);
  }



  apply() {
    const date = new Date();
    this.hrsDrift = date.getHours() - this.custom.hrs;
    this.minsDrift = date.getMinutes() - this.custom.mins;
  }

  reset() {
    const date = new Date();
    this.hrsDrift = 0;
    this.minsDrift = 0;
  }

}
