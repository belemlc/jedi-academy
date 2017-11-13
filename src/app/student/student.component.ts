import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Student } from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentComponent implements OnInit {

  @Input() student: Student
  @Input() titulo: string

  constructor() { }

  ngOnInit() {
  }

}
