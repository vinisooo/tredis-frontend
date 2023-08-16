import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login-services.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) {};


  @Input()
  login!: any;


  submitLogin() {
    this.loginService.login(this.login.value).subscribe((response) => {
      localStorage.setItem("token:", response.token);
    })
  }


  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.min(6)]]
    });
  }

}
