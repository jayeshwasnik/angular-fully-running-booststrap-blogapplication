import { Component, OnInit } from '@angular/core';

//importing route related code

import {ActivatedRoute,Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
//variable to store the blog being called
  public currentBlog;

  

  constructor(private _route:ActivatedRoute,private router:Router,public blogService:BlogService) {
    
    console.log("constructor called")
   }

  ngOnInit() {
    console.log("ngOnInit called")
    //getting the blogId from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog=this.blogService.getBlogInformation(myBlogId);
    
  }

//* /function to feed blog info from allBlogs to currentBlog


}