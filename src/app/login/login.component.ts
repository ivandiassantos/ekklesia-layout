import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  autenticar() {
    this.router.navigate(['/dashboard']);
  }

}
