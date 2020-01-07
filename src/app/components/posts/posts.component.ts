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
    this.currentPost={
      id:0,
      title:'',
      body:''
    }
  }
  editPost(post:Post){
    this.currentPost=post;
    this.isEdit= true;
    console.log(post)

  }
  onUpdatedPost(post:Post){
    this.posts.forEach((cur,index)=>{
      if(post.id === cur.id){
        this.posts.splice(index,1)
        this.posts.unshift(post)
        this.isEdit=false;
        this.currentPost={
          id:0,
          title:'',
          body:''
        }
      }
    })
  }
  removePost(post:Post){
    if(confirm('sure to remove this post')){
      this.postService.removePost(post.id).subscribe(()=>{
        this.posts.forEach((cur,index)=>{
          if(post.id === cur.id){
            this.posts.splice(index,1)
          }
        })
      })
    }
  }

}
