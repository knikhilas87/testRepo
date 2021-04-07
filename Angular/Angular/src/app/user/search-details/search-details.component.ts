import { isDataSource } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceComponent } from 'src/app/shared/user.service';
import { ApplicationForm } from './../../model/application-form.model';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss'],
  providers: [DatePipe]
})
export class SearchDetailsComponent implements OnInit {
  form: FormGroup;
  displayedColumns: Array<string> = [
    'ApplicationID',
    'PartnerName',
    'NoOfInsured',
    'NoOfSeniorInsured',
    'Revenue',
    'Year',
    'ListType'
  ];
  dataSource = '';
  ELEMENT_DATA: any;

  constructor(private userService: ServiceComponent, private fb: FormBuilder,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      listType: [''],
      fromYear: [''],
      toYear: [''],
    });
  }

  public onSearch(): void {
    const listType = this.form.get('listType').value;
    const fromYear = this.datePipe.transform(this.form.get('fromYear').value,'yyyy-MM-dd');
    // this.form.get('fromYear').value;
    const toYear = this.datePipe.transform(this.form.get('toYear').value,'yyyy-MM-dd');
    this.userService.GetApplicationDetails(listType, fromYear, toYear).subscribe((data: any) => {
      if (data) {
        this.dataSource = data;
      }
    });
  }
}
