import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }
}
