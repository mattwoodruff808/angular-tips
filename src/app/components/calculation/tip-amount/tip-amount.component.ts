import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tip-amount',
  templateUrl: './tip-amount.component.html',
  styleUrls: ['./tip-amount.component.css']
})
export class TipAmountComponent implements OnInit {
  @Input() tip?: number;
  @Input() alert?: string;

  ngOnInit(): void {
  }

}
