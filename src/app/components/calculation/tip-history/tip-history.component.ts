import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tip-history',
  templateUrl: './tip-history.component.html',
  styleUrls: ['./tip-history.component.css']
})
export class TipHistoryComponent implements OnInit {
  @Input() tipHistory?: number[];

  date = new Date().toISOString().split('T');

  constructor() { }

  ngOnInit(): void {
  }

}
