
import { Component } from '@angular/core';

@Component({
    selector:'hello-world',
    templateUrl: './app/practice/practice.component.html'
})
export class PracticeComponent{
    name: string = "World";
    aNumber: number = 0;

    formValue: string = JSON.stringify({});

    submitForm(form: NgForm){
        this.formValue = JSON.stringify(form.value);
    }

    Increment(): void{
        this.aNumber++;
    }
    Decrement(): void{
        this.aNumber--;
    }

    practiceOutput(): void{
        console.log(this.name);
    }

    constructor(){this.practiceOutput();}
}