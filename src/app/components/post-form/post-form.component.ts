import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost : EventEmitter<Post>=new EventEmitter()
  @Output() updatedPost:EventEmitter<Post>= new EventEmitter();
  @Input() currentPost:Post;
  @Input() isEdit:boolean;


  constructor(private postSerive:PostsService) { }

  ngOnInit() {
  }

  addPost(title,body,id){
    if(!title || !body){
      alert('pls add a post')
    }else{
      this.postSerive.savePost({title,body,id} as Post).subscribe(post =>{
        this.newPost.emit(post)
      })
    }
  }

  updatePost(){
    this.postSerive.updatePost(this.currentPost).subscribe(post =>{
      console.log(post)
      this.isEdit=false;
      this.updatedPost.emit(post)
    })
  }

}
