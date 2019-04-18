import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  user:string;
  city:string;
  List: any = [] ;


  constructor(private route: Router) {

  }

  ngOnInit() {

  }
  add(){
    this.List.push(
      {
        user: this.user,
        city: this.city
      }
    ) ;
  }
  delete(i) {
    this.List.splice(i, 1) ;
  }
  saveThis(i){
    let Info = this.List[i] ;
    localStorage.setItem('Info', JSON.stringify(Info)) ;
    this.route.navigate(['weather']);
  }

  save(){
    let Info = {
      city: this.city,
      user: this.user
    } ;
    localStorage.setItem('Info', JSON.stringify(Info)) ;
    this.route.navigate(['weather']);
  }

}
