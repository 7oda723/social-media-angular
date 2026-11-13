// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../../../environments/environment.development';

// @Injectable({
//   providedIn: 'root',
// })
// export class PostsService {
//   private readonly http = inject(HttpClient);

//   myHeaders:object={
//     'AUTHORIZATION':`Bearer ${localStorage.getItem('socialToken')}`
//   }

//   allPosts():Observable<any> {
//     return this.http.get(`${environment.baseURL}/posts`,this.myHeaders)
//   }

//   createPosts(body:any):Observable<any> {
//     return this.http.post(`${environment.baseURL}/posts`,body,this.myHeaders)
//   }

//   singlePosts(postId:any):Observable<any> {
//     return this.http.get(`${environment.baseURL}/posts ${postId}`,this.myHeaders)
//   }

//   deletePosts(postId:any):Observable<any> {
//     return this.http.delete(`${environment.baseURL}/posts ${postId}`,this.myHeaders)
//   }


// }


// 
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly http = inject(HttpClient);

  // myHeaders: object = {
  //   headers: {
  //     token: localStorage.getItem('socialToken')
  //   }
  // };

  allPosts(page:number = 1): Observable<any> {
    return this.http.get(`${environment.baseURL}/posts?page=${page}`,);
  }

  createPosts(body: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/posts`, body,);
  }

  singlePosts(postId: any): Observable<any> {
    return this.http.get(`${environment.baseURL}/posts/${postId}`,);
  }

  deletePosts(postId: any): Observable<any> {
    return this.http.delete(`${environment.baseURL}/posts/${postId}`,);
  }
}
