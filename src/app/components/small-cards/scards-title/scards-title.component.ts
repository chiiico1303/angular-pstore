import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scards-title',
  templateUrl: './scards-title.component.html',
  styleUrls: ['./scards-title.component.css'],
})
export class ScardsTitleComponent implements OnInit {
  @Input()
  gameTitleSmall: string = '';
  constructor() {}

  ngOnInit(): void {}
}
