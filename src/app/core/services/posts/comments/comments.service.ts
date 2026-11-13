import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {

  private readonly http = inject(HttpClient);

  // myHeaders:object = {
  //   headers:{
  //     token: localStorage.getItem('socialToken')
  //   }
  // };

  allComments(postId:any):Observable<any> {
    return this.http.get(`${environment.baseURL}/posts/${postId}/comments?page=1&limit=10`)
  }

  createComments(postId:any , body:any):Observable<any>{
    return this.http.post(`${environment.baseURL}/posts/${postId}/comments`,body)
  }


  }

