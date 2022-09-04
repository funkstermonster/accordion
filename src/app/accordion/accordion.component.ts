import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() id!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
