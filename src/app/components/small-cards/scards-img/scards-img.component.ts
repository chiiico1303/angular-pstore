import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scards-img',
  templateUrl: './scards-img.component.html',
  styleUrls: ['./scards-img.component.css'],
})
export class ScardsImgComponent implements OnInit {
  @Input()
  gameCoverSmall: string = '';
  constructor() {}

  ngOnInit(): void {}
}
