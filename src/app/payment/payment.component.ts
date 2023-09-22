import { Component } from '@angular/core';
import { MockDataService } from '../shareed/mock-data.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedCandidate: any;
  selectedDate: string | null = null;

  constructor(private mockDataService: MockDataService) {}

  pay() {
    // Simulate payment process
    this.selectedCandidate.selectedDate = this.selectedDate;
    alert('Payment successful!');
  }
}
