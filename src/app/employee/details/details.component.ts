import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  empData
  dataFromHttp
  constructor(private dataser: DataService) {
    this.empData = this.dataser.employeeData
  }

  ngOnInit() {

  }



  communicate() {
    this.dataser.getDataFromHttpGetMethod().subscribe(result => {
      console.log(result)
      this.dataFromHttp = result
    },
      err => {

      }
    )
  }
}
