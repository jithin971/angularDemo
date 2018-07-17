import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor( private router:Router,private dataser:DataService) { }

  ngOnInit() {
  }
  employees = [{ name: 'jithin', age: 20 }, { name: 'raju', age: 30 }, { name: 'sabu', age: 40 }]

  
  selectData(obj) {
    this.dataser.employeeData=obj
    this.router.navigate(['empDetails'])

  }
  parentData
  dataFromParent(data) {
   this.parentData=data
  }

}
