import { Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../core/services/posts/posts.service';
import { CommentsComponent } from '../feedsfeeds/comments/comments.component';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink,CommentsComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit{

  private readonly activatedRoute = inject(ActivatedRoute)

  private readonly PostsService = inject(PostsService)

  postId = signal('');

  display:WritableSignal<RootObject> = signal({} as RootObject)

  ngOnInit(): void {
    this.details()
  }

  details(){
    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{
        console.log(res.get('id'));
        this.postId.set(res.get('id')!)
        this.singlePost()
      },

      error:(err)=>{
        console.log(err.error);
        
      }
    })

  }

  singlePost(){
    this.PostsService.singlePosts(this.postId()).subscribe({

      next:(res)=>{
        console.log(res.data.post);
        this.display.set(res.data.post)
        
        
      },

      error:(err)=>{
        console.log(err.error);
        
      }
    })
    }
  }

