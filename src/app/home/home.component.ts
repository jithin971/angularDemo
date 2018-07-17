import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testdata=""
  constructor(private ds:DataService) {
    this.testdata=ds.testData
   }

  ngOnInit() {
  }

}
