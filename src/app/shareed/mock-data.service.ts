import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  candidates = [
    { id: 1, name: 'Candidate 1', selectedDate: null },
    { id: 2, name: 'Candidate 2', selectedDate: null },
    { id: 3, name: 'Candidate 2', selectedDate: null },
    { id: 4, name: 'Candidate 2', selectedDate: null },
    { id: 5, name: 'Candidate 2', selectedDate: null },
    { id: 6, name: 'Candidate 2', selectedDate: null },
    { id: 7, name: 'Candidate 2', selectedDate: null },
    { id: 8, name: 'Candidate 2', selectedDate: null },
    { id: 9, name: 'Candidate 2', selectedDate: null },
    { id: 10, name: 'Candidate 2', selectedDate: null },
    { id: 11, name: 'Candidate 2', selectedDate: null },
    { id: 12, name: 'Candidate 2', selectedDate: null },
    // Add more candidates
  ];

  examDates = [
    { id: 1, date: '2023-09-15', available: true },
    { id: 2, date: '2023-09-20', available: true },
    { id: 3, date: '2023-09-25', available: true }, // Already booked
    { id: 4, date: '2023-09-15', available: true },
    { id: 5, date: '2023-09-20', available: false },
    { id: 6, date: '2023-09-25', available: true }, 
  ];
}
