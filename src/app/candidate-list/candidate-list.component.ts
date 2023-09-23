import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
import { MatSort } from '@angular/material/sort' ;

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['position', 'name', 'prenom', 'reserved'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  searchQuery: string = '';

  type = 'line';
data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Number of condidat",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: true
};

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filterData() {
    if (!this.searchQuery) {
      // If the search query is empty, show all data
      this.dataSource.data = ELEMENT_DATA;
    } else {
      // Filter the data based on the search query
      const filteredData = ELEMENT_DATA.filter((element) =>
        element.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()) || element.prenon.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      );
      this.dataSource.data = filteredData;
    }
  }
  ngOnInit() {
    // this.dataSource.sort = this.sort;
    const ctx = document.getElementById('myBarChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Series A',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    /* Doughnut Chart */
    const ctx2 = document.getElementById('myDoughnutChart') as HTMLCanvasElement;
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Gris', 'Blue', 'Navy blue'],
        datasets: [{
          data: [30, 20, 50],
          backgroundColor: ['#DADADA', 'blue', '#20283E'],
        }],
      },
    });
  }
}

export interface PeriodicElement {
  name: string;
  prenon: string,
  position: number;
  reserved: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Asmae', prenon: 'OUBRAIM',reserved: true},
  {position: 2, name: 'Malak',  prenon: 'OUBRAIM',reserved: true},
  {position: 3, name: 'Ikrame', prenon: 'OUBRAIM',reserved: true},
  {position: 4, name: 'Salah-eddine', prenon: 'OUBRAIM',reserved: true},
  {position: 5, name: 'Youssef',  prenon: 'OUBRAIM',reserved: true},
  {position: 6, name: 'Yahia', prenon: 'OUBRAIM', reserved: true},
  {position: 7, name: 'Anas',  prenon: 'OUBRAIM',reserved: true},
  {position: 8, name: 'Yessine', prenon: 'OUBRAIM', reserved: true},
  {position: 9, name: 'Hamza', prenon: 'OUBRAIM', reserved: true},
  {position: 10, name: 'Salim', prenon: 'OUBRAIM', reserved: true},
  {position: 11, name: 'Mohamed',  prenon: 'OUBRAIM',reserved: true},
  {position: 12, name: 'Tarik', prenon: 'OUBRAIM',reserved: true},
  {position: 13, name: 'Abd-elillah',  prenon: 'OUBRAIM',reserved: true},
  {position: 14, name: 'Bader',  prenon: 'OUBRAIM',reserved: true},
  {position: 15, name: 'Asmae',  prenon: 'OUBRAIM',reserved: true},
  {position: 16, name: 'Lamiae',  prenon: 'OUBRAIM',reserved: true},
  {position: 17, name: 'Chaimae',  prenon: 'OUBRAIM',reserved: true},
  {position: 18, name: 'Fati',  prenon: 'OUBRAIM',reserved: true},
  {position: 19, name: 'Hoda',  prenon: 'OUBRAIM',reserved: true},
  {position: 20, name: 'Sara',  prenon: 'OUBRAIM',reserved: true},
];
