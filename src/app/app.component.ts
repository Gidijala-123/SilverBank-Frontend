import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactServiceService } from './contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Final-Silver-Frontend';
  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private serviceLayer: ContactServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      silverPhoneNumber: ['', Validators.required],
      silverEmail: ['', [Validators.required, Validators.email]],
      silverFullName: ['', Validators.required],
      silverTopic: ['', Validators.required],
      silverMessage: ['', Validators.required],
    });
  }

  submitData() {
    if (this.contactForm.invalid) {
      return;
    }
    let map = {
      silverPhoneNumber: this.contactForm.value.silverPhoneNumber,
      silverEmail: this.contactForm.value.silverEmail,
      silverFullName: this.contactForm.value.silverFullName,
      silverTopic: this.contactForm.value.silverTopic,
      silverMessage: this.contactForm.value.silverMessage,
    };

    this.isSubmit = true;
    this.submitMessage = 'Submitted Successfully..!';
    // Message will hide automatically after 3.5 secs
    this.serviceLayer.postmethod(map, '/registerStudent').subscribe({
      next: (response) => {
        // alert('success');
      },
      error: (error) => {
        // alert('error');
      },
    });
    setTimeout(() => {
      this.isSubmit = false;
    }, 3500);
  }
}
