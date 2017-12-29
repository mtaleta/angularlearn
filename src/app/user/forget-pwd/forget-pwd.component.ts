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

  results:string[];
  constructor(private http: HttpClient) {}

  forgetForm: FormGroup;

  forget = { email: '' };

  ngOnInit(): void {
    // json位置為404
    const Url = 'app/mock-data/forget-pwd-mock.json';
    this.http.get(Url).subscribe(
      data => {
        console.log(data + '1')
        this.results = data['message']
        console.log(this.results + '2')
      });

    this.forgetForm = new FormGroup({
      'email': new FormControl(this.forget.email, [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
      ])
    });
  }


  get email() { return this.forgetForm.get('email'); }
}
