import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected readonly title = signal('mahmoud-mousa-sunday-wednesday-7-10-social-app-01507823868');
  // private readonly NgxSpinnerService = inject(NgxSpinnerService)
  // ngOnInit(): void {
  //   this.NgxSpinnerService.show('main')
    
  // }
}
