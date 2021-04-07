import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApplicationForm,
  ListType,
} from 'src/app/model/application-form.model';
import { ServiceComponent } from 'src/app/shared/user.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
  providers: [DatePipe],
})
export class ApplicationDetailsComponent implements OnInit {
  applicationValid: boolean;
  applicationForm: ApplicationForm;
  form: FormGroup;
  errorMessage: string;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: ServiceComponent,
    private datePipe: DatePipe
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      partnerName: ['', Validators.required],
      InsuredPeople: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      seniorInsured: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      revenue: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      year: ['', Validators.required],
    });
    this.applicationForm = {
      PartnerName: '',
      NoOfInsured: 0,
      NoOfSeniorInsured: 0,
      Revenue: 0,
      Year: '',
    };
    this.resetform();
  }

  public onSubmit(): void {
    this.applicationValid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        this.validateApplicationForm(this.form);
        if (!this.applicationValid) {
          this.userService
            .applicationForm(this.applicationForm)
            .subscribe((data: any) => {
              if (data) {
                this.resetform();
              }
            });
        }
      } catch (err) {
        this.applicationValid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  private validateApplicationForm(form: FormGroup): void {
    this.applicationForm.PartnerName = this.form.get('partnerName').value;
    const insuredPeople = form.get('InsuredPeople').value;
    const seniorInsured = form.get('seniorInsured').value;
    const revenue = form.get('revenue').value;
    if (insuredPeople > seniorInsured) {
      const currentDate: any = new Date(
        this.datePipe.transform(Date.now(), 'yyyy-MM-dd')
      );
      let year = form.get('year').value;
      this.applicationForm.Year = this.datePipe.transform(year, 'yyyy-MM-dd');
      year = new Date(this.datePipe.transform(year, 'yyyy-MM-dd'));
      const diffDays = Math.ceil(
        Math.abs(currentDate - year) / (1000 * 60 * 60 * 24)
      );

      this.applicationForm.NoOfSeniorInsured = seniorInsured;
      this.applicationForm.NoOfInsured = insuredPeople;
      this.applicationForm.Revenue = revenue;

      const seniorInsuredInTotalInsured = insuredPeople * 0.6;
      // page validation senior people should not be more than insured people

      if (
        revenue.length < 9 ||
        diffDays < 1826 ||
        seniorInsured < seniorInsuredInTotalInsured
      ) {
        this.applicationForm.ListType = ListType.Rejected;
      } else {
        this.applicationForm.ListType = ListType.Eligible;
      }
    } else {
      this.applicationValid = true;
      this.errorMessage =
        'Senior Insured People should not be more than Total Insured people';
    }
  }
  private resetform(): void {
    this.form.reset();
    this.applicationForm = {
      PartnerName: '',
      NoOfInsured: 0,
      NoOfSeniorInsured: 0,
      Revenue: 0,
      Year: '',
    };
  }
}
