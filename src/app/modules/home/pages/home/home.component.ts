import { Component, OnInit, HostListener, Inject  } from '@angular/core';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  newList:Product[] = [];
  isRequestingData:boolean = true;
  category:string = "";
  prevCategory : string = "";
  pages=0;
  doneRequest:boolean = false;

  constructor( private route: ActivatedRoute,     
    private router: Router, 
    private ds:DummyServiceService) {
  
  }

  // //when reach bottom, get next batch of post
  // @HostListener("window:scroll", ["$event"])
  // onWindowScroll() {
  //   //In chrome and some browser scroll is given to body tag
  //   let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  //   let max = document.documentElement.scrollHeight;

  //   // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
  //   if(pos == max || pos > max-30 )   {
  //       //check if currently still requesting data, to prevent multiple request
  //     if(this.isRequestingData){

  //     }else{
  //       if( this.doneRequest){

  //       }else{
  //         this.getPostList();

  //       }
  //     }

  //   }
  // }

  ngOnInit(): void { 
    this.getPostList();
  }

  // call service to get product list and set flag isRequestingData to true
  getPostList(){
    if (this.doneRequest) {

    } else {
      this.isRequestingData = true;
      this.ds.getProducts()// 
      .subscribe(resp => {
        let productList = resp.body;
        console.log(productList);
        if(productList.length < 1){
          this.doneRequest=true;
        } else {
          productList.forEach((element: any) => {
            let stat = new Product().deserialize(element);
            this.newList.push(stat);
            });
        }
        this.isRequestingData = false;
      });
    }
  }

  //reset category
  goHome(){
    this.newList = [];
    this.category = "";
    this.pages = 0;
    window.scroll(0,0);
    this.getPostList();
  }


}
