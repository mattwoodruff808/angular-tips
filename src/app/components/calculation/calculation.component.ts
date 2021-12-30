import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {
  amount = '';
  percent = '';
  tip?: number | undefined;
  alert?: string | undefined;
  tipHistory: number[] = [];

  ngOnInit(): void {
  }

  calculateTip(): void {
    const amountIsNumber = /^\d*\.?\d+$/.test(this.amount);
    const percentIsNumber = /^\d*\.?\d+$/.test(this.percent);

    if (amountIsNumber && percentIsNumber) {
      this.tip = undefined;
      this.alert = undefined;
      const decimalPercent = Number(this.percent) / 100;
      this.tip = Number(this.amount) * decimalPercent;
    } else {
      this.tip = undefined;
      this.alert = 'Please Enter a Valid Amount!';
    }

  }

  clear(): void {
    if (this.tip) {
      this.tipHistory.unshift(this.tip);
    }

    this.amount = '';
    this.percent = '';
    this.tip = undefined;
    this.alert = undefined;
  }

}
