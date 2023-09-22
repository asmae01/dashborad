import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ExamDatesComponent } from './exam-dates/exam-dates.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: CandidateListComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'exam-dates', component: ExamDatesComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
