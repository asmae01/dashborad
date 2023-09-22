import { Component } from '@angular/core';
import { MockDataService } from '../shareed/mock-data.service';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent {
  candidates: any[];

  constructor(private mockDataService: MockDataService) {
    this.candidates = this.mockDataService.candidates;
  }

}
