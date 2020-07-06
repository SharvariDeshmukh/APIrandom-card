import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private url="https://pixabay.com/api/?key=12869519-d7c68fa0c9180f03febe0c6e7&q=blog&image_type=photo";
  constructor(private http : HttpClient) {
 
   }
   getUser(){
    return this.http.get(this.url);
  }
}
