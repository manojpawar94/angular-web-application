import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true; //password field hide or show
  loginForm: FormGroup; //login form

  // constructor 
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private notifier: NotificationService) { }

  ngOnInit(): void {
    // initializing the form
    this.loginForm = this.formBuilder.group({
      soeid: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      password: ['', [Validators.required]]
    })
  }

  get lf() { return this.loginForm.controls; }

  // method
  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['devops']);
    } else {
      this.notifier.showNotification('Please fill SOEID and Password and Try again');
    }
  }
}
