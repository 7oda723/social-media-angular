import { Component, HostListener, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';
import { CommentsComponent } from '../comments/comments.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HelloPipe } from '../../../shared/pipes/hello-pipe';
import { FilterPipe } from '../../../shared/pipes/filter-pipe';
import { Test } from '../../../shared/directives/test';

@Component({
  selector: 'app-center-content',
  imports: [CommentsComponent,FormsModule, ReactiveFormsModule, RouterLink,CurrencyPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,HelloPipe,FilterPipe,Test],
  templateUrl: './center-content.component.html',
  styleUrl: './center-content.component.css',
})
export class CenterContentComponent implements OnInit {

  private readonly PostsService = inject(PostsService)
  private readonly NgxSpinnerService = inject(NgxSpinnerService)

  allPost:WritableSignal<RootObject[]> = signal([]) 

  loggedUserData:WritableSignal<IUser> = signal({} as IUser)

  search = signal('')

  currentPage = signal(1);

  totalPage = signal(1);

  imgFile!:File;

  imgUrl = signal<string|ArrayBuffer|null|undefined>('')
  // imgUrl:WritableSignal<string|ArrayBuffer|null|undefined> = signal('')

  postBody:FormControl = new FormControl

  postPrivacy:FormControl = new FormControl('public')

  toggle:WritableSignal<string | null> = signal(null)

  toggleComment:WritableSignal<string | null> = signal(null)

  ngOnInit(): void {
    this.allPosts()
    this.userData()
  }

  allPosts(page:number = 1){
    this.NgxSpinnerService.show('main')

    this.PostsService.allPosts(page).subscribe({
      
      next:(res)=>{
        console.log(res);
        this.allPost.set(res.data.posts)
        this.currentPage.set(res.meta.pagination.currentPage)
        this.totalPage.set(res.meta.pagination.numberOfPages)
        // setTimeout(() => {
      this.NgxSpinnerService.hide('main')
    // }, 5000);
      },

      error:(err)=>{
        console.log(err.error);
        this.NgxSpinnerService.hide('main')
        
      }
    })
  }

  next(){
    if(this.currentPage() < this.totalPage()){
      this.allPosts(this.currentPage() + 1)
    }
  }

  Previous(){
    if(this.currentPage() > 1){
      this.allPosts(this.currentPage() - 1)
    }
  }

  loadedFile(e:Event){
    let input = e.target as HTMLInputElement


      if (input.files) {

        this.imgFile = input.files[0]

        console.log(this.imgFile);
        
        this.readFile()
      
      
    }
    
  }

  readFile(){
   let fileReader = new FileReader()
    fileReader.readAsDataURL(this.imgFile)
    fileReader.onload =(e)=>{
      this.imgUrl.set(e.target?.result)
    }
  }

  creatPost(e:SubmitEvent,form:HTMLFormElement){
    e.preventDefault()

    console.log(this.postBody.value);
    console.log(this.postPrivacy.value);
    console.log(this.imgUrl());

    let formData = new FormData()

    formData.append('body',this.postBody.value)
    formData.append('privacy',this.postPrivacy.value)
    formData.append('image',this.imgFile)

    this.PostsService.createPosts(formData).subscribe({
      next:(res)=>{
        console.log(res);
        this.allPosts()
        form.reset()

        this.imgUrl.set(null)
        
      },

      error:(err)=>{
        console.log(err.error);
        
      }
    })
    

  }

  toggleB(id:string){
    this.toggle.set(this.toggle() === id ? null : id)
  }

  toggleComments(id:string){
    this.toggleComment.set(this.toggleComment() === id ? null : id)
  }

  @HostListener('document:click')

  close(){
    this.toggle.set(null)
  }
  
  delete(postId:string){
    this.PostsService.deletePosts(postId).subscribe({
      next:(res)=>{
        console.log(res);
        this.allPosts()
      },

      error:(err)=>{
        console.log(err.error);
        
      }
    })
  }

  userData(){
    this.loggedUserData.set(JSON.parse(localStorage.getItem('socialUser')!))
    console.log(this.loggedUserData());
    
  }
  
}
