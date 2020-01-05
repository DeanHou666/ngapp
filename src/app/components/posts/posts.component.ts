import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post'
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  currentPost:Post = {
    id:0,
    title:'',
    body:''
  };
  isEdit:boolean=false;

  constructor( private postService:PostsService) { }

  ngOnInit() {
      this.postService.getPost().subscribe(posts =>{
        this.posts = posts
      })  
  }
  onNewPost(post:Post){
    this.posts.unshift(post)
  }
  editPost(post:Post){
    this.currentPost=post;
    this.isEdit= true;

  }

}
