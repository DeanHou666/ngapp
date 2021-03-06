import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Post } from '../components/models/post'
import { Observable } from 'rxjs';

const headerOpitons ={
  headers : new HttpHeaders({'Content-type' :'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  post:Post;
  postUrl:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http : HttpClient) { }
  
  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl)
  }

  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postUrl,post,headerOpitons)
  }

  updatePost(post:Post):Observable<Post>{
    const url = `${this.postUrl}/${post.id}`
    return this.http.put<Post>(url,post,headerOpitons)
  }
  removePost(post:Post | number ):Observable<Post>{
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postUrl}/${id}`
    return this.http.delete<Post>(url,headerOpitons)
  }
}
