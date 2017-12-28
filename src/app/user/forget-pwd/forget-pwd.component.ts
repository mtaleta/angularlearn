import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../modal/user-model';
// import { ForgetPwdService } from './forget-pwd.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})

export class ForgetPwdComponent implements OnInit {
  errorMessage: any;
  constructor(private http: Http) {}

  data: any;
  forgetForm: FormGroup;

  forget = { email: '' };

  ngOnInit(): void {
    const Url = '/src/app/mock-data/forget-pwd-mock.json';
    this.http.get(Url)
    .subscribe(
      data => this.data = data,
      error =>  this.errorMessage = <any>error
    );

    this.forgetForm = new FormGroup({
      'email': new FormControl(this.forget.email, [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
      ])
    });
  }


  get email() { return this.forgetForm.get('email'); }
}
