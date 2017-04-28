import { Component } from '@angular/core';

@Component ({
    selector: 'login',
    templateUrl: './app/login/login.component.html'
})

export class LoginComponent{
    username: string;
    password: string;

    readonly db_username: string = "test";
    readonly db_pass: string = "pass";

    CanLogin(form: NgForm): void{
        //console.log((user == this.username && pass == this.password));
        console.log(JSON.stringify(form["username"]));
    }
    
}