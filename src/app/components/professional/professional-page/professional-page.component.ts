import { EnglishText } from '../../../../assets/text/englishText';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-page',
  templateUrl: './professional-page.component.html',
  styleUrls: ['./professional-page.component.scss']
})
export class ProfessionalPageComponent implements OnInit {

  public content = [
    {
      name: 'Crime Runners',
      text: EnglishText.crimeText
    },
    {
      name: 'Cloudflight',
      text: EnglishText.cloudText
    }
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
