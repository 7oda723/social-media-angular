import { Component, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { CommentsService } from '../../../core/services/posts/comments/comments.service';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  private readonly comments = inject(CommentsService);

  postId:InputSignal<string> = input.required()
  comment:WritableSignal<iComment[]> = signal([])

  ngOnInit(): void {
    this.allComment()
    
  }

  allComment(){
    this.comments.allComments(this.postId()).subscribe({
      next: (res)=>{
        console.log(res);
        this.comment.set(res.data.comments)
      },

      error:(err)=>{
        console.log(err.error);
        
      }
    })
  }
}
