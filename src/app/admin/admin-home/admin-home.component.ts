import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatTableModule],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})

export class AdminHomeComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name']
  
  dataSource = new MatTableDataSource<Element>();

  constructor(){

  }

  ngOnInit(): void {
      
  }
}
