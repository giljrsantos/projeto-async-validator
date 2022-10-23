import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppValidator } from './app.validator';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z]{3,10}$/),
    ],
      [AppValidator.usernameJaExiste(this.userService)]
    ),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
  });

  get username(){
    return this.formGroup.get('username');
  }

  get email(){
    return this.formGroup.get('email');
  }

  // Injeta o UserService para ser utilizado no
  // validador assíncrono do username
  constructor(private userService: UserService){}

  postar(){
    if(this.formGroup.invalid){
      return;
    }
    console.log(this.formGroup.value);
  }
  title = 'projeto-async-validator';
}
