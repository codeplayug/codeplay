import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.scss'],
})
export class WebHeaderComponent implements OnInit {
  @Input() title = 'CODEPLAY';

  constructor() {}

  ngOnInit() {}
}
