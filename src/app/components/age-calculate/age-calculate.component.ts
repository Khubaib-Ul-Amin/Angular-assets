import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculate',
  templateUrl: './age-calculate.component.html',
  styleUrls: ['./age-calculate.component.sass']
})
export class AgeCalculateComponent {
  age: string | number | Date | undefined;
  showAge: number | undefined;

  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/12);
    }
  }
  ageCalculator2(){
    let d1: number | null  = 31
    let m1: number | null  = 12
    let y1: number | null  = 2005

    let date = new Date;

    let d2: number | undefined = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month: number[] = [31, 28, 31, 30 , 31, 30, 31, 31, 30, 31 ,30 ,31];

    if(d1 > d2){
     d2 = d2 + month[m2 - 1];
     m2 = m2 -1;
    }
    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 -1;
     }
     if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 -1;
     }

    let d = d2 -d1
    let m = m2 - m1
    let y = y2 - y1



    console.log(`Your Age is ${y} Years ${m} Month ${d} Days`);
    
  }

}
