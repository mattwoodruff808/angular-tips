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

  ngOnInit(): void {
  }

  calculateTip(): void {
    const amountIsNumber = /^\d*\.?\d+$/.test(this.amount);
    const percentIsNumber = /^\d*\.?\d+$/.test(this.percent);

    if (amountIsNumber && percentIsNumber) {
      const decimalPercent = Number(this.percent) / 100;
      this.tip = Number(this.amount) * decimalPercent;
    } else {
      console.log('NOT A NUMBER');
    }

  }

  clear(): void {
    this.amount = '';
    this.percent = '';
    this.tip = undefined;
  }

}
