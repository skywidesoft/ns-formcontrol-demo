import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit { 

    contactForm: FormGroup;
    firstName: AbstractControl;
    lastName: AbstractControl;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {

        this.contactForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]]
        });

        this.firstName = this.contactForm.controls['firstName'];
        this.lastName = this.contactForm.controls['lastName'];

    }

    onSubmit() {
        console.log('On submit');

        console.log(`Contact form valid: ${this.contactForm.valid}`);
        console.log(`Contact form value: ${JSON.stringify(this.contactForm.value)}`);
    }

}
