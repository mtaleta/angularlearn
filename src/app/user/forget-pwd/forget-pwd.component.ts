import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../modal/user-model';
// import { ForgetPwdService } from './forget-pwd.service';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {


  forgetForm: FormGroup;

  forget = { email: '' };



  ngOnInit(): void {
    this.forgetForm = new FormGroup({
      'email': new FormControl(this.forget.email, [
        Validators.required,
        Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
      ])
    });
  }


  get email() { return this.forgetForm.get('email'); }
}
