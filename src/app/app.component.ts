import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public searchData: any;
  public postSearchData: any;
  public defaultimage: string = "assets/thumbnail.jpg";
  public flag :boolean = false;
  public dataOnsubmit: string;
  p: number = 1;
  
  
  constructor(private http: HttpClient){
    this.dataOnsubmit = '';

  }
  ngOnInit() {
  
  }

  title = 'newsproject';
  //apiBase = "http://localhost:3000"
  getNewsList(newsdata: string): string {
     return `http://localhost:3000/posts?title=${newsdata}`;
  }
  submit(){
    this.dataOnsubmit = this.searchData;
    if(this.dataOnsubmit){
      this.flag = false;
      this.fetchListData(this.dataOnsubmit);
    }else{
  this.flag = true;
  this.postSearchData= null;
    }
 
  }
  
fetchListData(requestdata: any){
  this.http.get(this.getNewsList(requestdata)).subscribe((data) => {
    this.postSearchData = data;
    console.log(data);
  });
  }
}
