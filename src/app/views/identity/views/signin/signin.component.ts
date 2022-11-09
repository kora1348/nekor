import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from 'src/app/services/sessions.service';
import { Login } from './login';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: Login = new Login();
  ngUnsubscribe = new Subject<void>();

  constructor(private log : SessionService, private store : Store, private router: Router) {

  }

  ngOnInit() {
  }

  login():void {

  }
}


 
