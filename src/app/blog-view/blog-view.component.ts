import { Component, OnInit } from '@angular/core';

//importing route related code

import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private router:Router) {
    
    console.log("cosntructor called")
   }

  ngOnInit() {
    console.log("ngOnInit called")
    //getting the blogId from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
  }

}