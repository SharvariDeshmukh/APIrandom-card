import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import {PixabayService} from "./pixabay.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'random-card';
  user: any;
  photo: any;
  id:number=0;
  constructor(
    private userService : UserService, 
    private PixabayService : PixabayService, 
    
    private toastr: ToastrService){

  }
  onClick(){
    this.PixabayService.getUser().subscribe( 
      (photo: any)=>{

        this.photo=photo.hits[this.id];
        this.id=this.id+1;
     console.log(photo);
   },
   (err)=>{
     this.toastr.error(err.status, "Oops");
   },);
    this.userService.getUser().subscribe(
      (user: any)=>{
        console.log(user);
        this.user = user.results[0];
      },
      (err)=>{
        this.toastr.error(err.status, "Oops");
      },
    );
  }
  ngOnInit(){
    this.PixabayService.getUser().subscribe( 
       (photo: any)=>{

         this.photo=photo.hits[this.id];
         this.id=this.id+1;
      console.log(photo);
    },
    (err)=>{
      this.toastr.error(err.status, "Oops");
    },);
    this.userService.getUser().subscribe(
      (user: any)=>{
        console.log(user);
        this.user = user.results[0];
      },
      (err)=>{
        this.toastr.error(err.status, "Oops");
      },
    );
  }
}
