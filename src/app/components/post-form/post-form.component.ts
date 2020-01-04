import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postSerive:PostsService) { }

  ngOnInit() {
  }

  addPost(title,body){
    if(!title || !body){
      alert('pls add a post')
    }else{
      console.log(title,body)
    }
  }

}
