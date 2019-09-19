import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declare a dummy blog variable having list of blogs

  public allBlogs=[
{"blogId":"1",
"created":"2019 october",
"tags":[],
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"this is the body",
"description":"This is the blog 1 description",
"title":"This is blog 1"
},
{"blogId":"2",
"created":"2019 october",
"tags":[],
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"this is the body",
"description":"This is the blog 2 description",
"title":"This is blog 2"
},
{"blogId":"3",
"created":"2019 october",
"tags":[],
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"this is the body",
"description":"This is the blog 3 description",
"title":"This is blog 3"
}

  ];

  constructor() { }

  ngOnInit() {
  }

}