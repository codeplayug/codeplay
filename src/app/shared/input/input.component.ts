import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label = '';

  constructor() {}

  ngOnInit() {}
}
