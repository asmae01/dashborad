import { Component } from '@angular/core';
import { MockDataService } from '../shareed/mock-data.service';

@Component({
  selector: 'app-exam-dates',
  templateUrl: './exam-dates.component.html',
  styleUrls: ['./exam-dates.component.css']
})
export class ExamDatesComponent {
  examDates: any[];
  selectedDate: string| null = null; // Initialize as null;

  constructor(private mockDataService: MockDataService) {
    this.examDates = this.mockDataService.examDates;
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }
}
